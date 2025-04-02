import { NextApiRequest, NextApiResponse } from 'next';

// Define types for our request bodies
interface PropertySearchBody {
  query: string;
  format: string;
  num_records: number;
  download: boolean;
  view?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Allow GET requests for debugging
  if (req.method === 'GET') {
    return res.status(200).json({
      status: 'API is working',
      message: 'This endpoint expects POST requests with a specific format',
      documentation: 'See the plugin manifest for required parameters'
    });
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Log the entire request for debugging
    console.log('Full request body received:', typeof req.body, JSON.stringify(req.body, null, 2));
    console.log('Query parameters:', JSON.stringify(req.query, null, 2));
    console.log('Request URL:', req.url);
    
    // First, ensure req.body is an object - if it's a string, parse it
    let parsedBody = req.body;
    if (typeof req.body === 'string') {
      try {
        parsedBody = JSON.parse(req.body);
        console.log('Parsed request body from string:', parsedBody);
      } catch (e) {
        console.error('Failed to parse request body string:', e);
      }
    }
    
    // Extract API name from URL path if present
    let apiNameFromUrl = null;
    if (req.url) {
      const urlPath = req.url.split('?')[0];
      // If URL contains a segment like /api/v1/datafiniti/searchBusinessData
      const pathSegments = urlPath.split('/');
      const lastSegment = pathSegments[pathSegments.length - 1];
      const secondLastSegment = pathSegments[pathSegments.length - 2]; 
      
      // If it looks like /datafiniti/searchBusinessData or ends with /searchBusinessData
      if (secondLastSegment === 'datafiniti' && lastSegment) {
        apiNameFromUrl = lastSegment;
      } else if (lastSegment.includes('search') || lastSegment.includes('get')) {
        apiNameFromUrl = lastSegment;
      }
    }
    
    // For raw POST data without JSON parsing, try to identify API by examining the request
    let fallbackApiName = null;
    if (typeof req.body === 'string') {
      if (req.body.includes('Santa Barbara') || req.body.includes('property')) {
        fallbackApiName = 'searchProperties';
      }
    }
    
    // Extract API name and arguments based on LobeChat plugin format
    // Try various possible formats from the LobeChat plugin request
    const apiName = parsedBody.name || 
                   parsedBody.apiName ||
                   apiNameFromUrl ||
                   req.query.name || 
                   (parsedBody.arguments && parsedBody.arguments.api) || 
                   parsedBody.api ||
                   fallbackApiName ||
                   (req.url && req.url.includes('searchBusinessData') ? 'searchProperties' : null) ||
                   (req.url && req.url.includes('searchProductData') ? 'searchProductData' : null);
                   
    console.log('Extracted API name:', apiName);
    
    // Try various possible formats for arguments
    const args = parsedBody.arguments || 
                parsedBody || 
                {};
                
    console.log('Extracted arguments:', typeof args, args);

    if (!apiName) {
      // Final fallback - if it looks like a property query, use searchProperties
      if (typeof req.body === 'string') {
        const bodyStr = req.body.toLowerCase();
        if (bodyStr.includes('property') || 
            bodyStr.includes('house') || 
            bodyStr.includes('home') || 
            bodyStr.includes('city') || 
            bodyStr.includes('santa barbara')) {
          console.log('Using fallback API name searchProperties based on request content');
          // Instead of recursive call, just set apiName and continue
          const forcedApiName = 'searchProperties';
          
          // Continue with forcedApiName instead of apiName
          // Prepare the search query
          let query = '';
          if (parsedBody && parsedBody.query) {
            query = parsedBody.query;
          } else if (typeof req.body === 'string') {
            try {
              const bodyObj = JSON.parse(req.body);
              query = bodyObj.query || '';
            } catch (e) {
              // If body isn't parseable JSON, use it as-is if it looks like a query
              if (req.body.includes(':') || req.body.includes('AND')) {
                query = req.body;
              }
            }
          }
          
          // Apply standard formatting for boolean operators
          query = query
            .replace(/\b(and)\b/gi, 'AND')
            .replace(/\b(or)\b/gi, 'OR')
            .replace(/\b(not)\b/gi, 'NOT');
            
          console.log('Formatted query from fallback:', query);
          
          // Determine the endpoint and prepare request body
          let endpoint = 'https://api.datafiniti.co/v4/properties/search';
          let requestBody: PropertySearchBody = {
            query: query,
            format: 'JSON',
            num_records: 10,
            download: false,
            view: 'property_preview'
          };
          
          console.log(`Making request to ${endpoint} with body:`, JSON.stringify(requestBody, null, 2));
          
          // Make the API call
          const apiToken = process.env.DATAFINITI_API_TOKEN;
          const fetchOptions = {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${apiToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
          };
          
          const response = await fetch(endpoint, fetchOptions);
          const responseText = await response.text();
          
          if (!response.ok) {
            return res.status(response.status).json({
              error: `API error: ${response.status}`,
              message: responseText
            });
          }
          
          // Parse and return the response
          try {
            const data = JSON.parse(responseText);
            return res.status(200).json(data);
          } catch (error: any) {
            return res.status(500).json({
              error: 'Failed to parse API response',
              rawResponse: responseText.substring(0, 1000)
            });
          }
        }
      }
      
      console.error('Missing API name');
      return res.status(400).json({ 
        error: 'Missing API name in request body',
        debug: {
          rawBody: typeof req.body === 'string' ? req.body : JSON.stringify(req.body),
          parsedBody: parsedBody,
          query: req.query,
          url: req.url
        }
      });
    }
    
    if (!args) {
      console.error('Missing arguments');
      return res.status(400).json({ error: 'Missing arguments in request body' });
    }

    const apiToken = process.env.DATAFINITI_API_TOKEN;
    if (!apiToken) {
      console.error('API token not configured');
      return res.status(500).json({ error: 'API token not configured' });
    }

    // Parse arguments - handle both string and object formats
    let parsedArgs;
    try {
      // If args is a string, parse it as JSON
      // If args.arguments is a string (from LobeChat), parse that
      if (typeof args === 'string') {
        parsedArgs = JSON.parse(args);
      } else if (args.arguments && typeof args.arguments === 'string') {
        parsedArgs = JSON.parse(args.arguments);
      } else {
        parsedArgs = args;
      }
      
      console.log('Parsed arguments:', JSON.stringify(parsedArgs, null, 2));
    } catch (error) {
      console.error('Failed to parse arguments:', error);
      return res.status(400).json({ error: 'Invalid arguments format' });
    }

    // Prepare the search query
    let query = '';
    if (apiName === 'searchProperties' || apiName === 'searchBusinessData' || apiName === 'searchProductData') {
      query = parsedArgs.query || '';
      
      // Apply standard formatting for boolean operators
      query = query
        .replace(/\b(and)\b/gi, 'AND')
        .replace(/\b(or)\b/gi, 'OR')
        .replace(/\b(not)\b/gi, 'NOT');
        
      console.log('Formatted query:', query);
    }

    // Determine the endpoint and prepare request body
    let endpoint = 'https://api.datafiniti.co/v4/properties/search';
    let requestBody: PropertySearchBody = {
      query: query,
      format: parsedArgs.format || 'JSON',
      num_records: parsedArgs.num_records || 10,
      download: false
    };

    if (parsedArgs.view) {
      requestBody.view = parsedArgs.view;
    }

    // For getPropertyById, use the specific property endpoint
    if (apiName === 'getPropertyById') {
      const propertyId = parsedArgs.propertyId;
      if (!propertyId) {
        console.error('Missing propertyId');
        return res.status(400).json({ error: 'Missing propertyId for getPropertyById' });
      }
      endpoint = `https://api.datafiniti.co/v4/properties/${propertyId}`;
      requestBody = {} as PropertySearchBody; // Empty body for GET request
    }

    console.log(`Making request to ${endpoint} with body:`, JSON.stringify(requestBody, null, 2));

    // Make the API call
    const method = apiName === 'getPropertyById' ? 'GET' : 'POST';
    const fetchOptions = {
      method,
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
      ...(method === 'POST' && { body: JSON.stringify(requestBody) })
    };

    const response = await fetch(endpoint, fetchOptions);
    const responseText = await response.text();
    console.log('API response status:', response.status);
    console.log('API response text sample:', responseText.substring(0, 500) + '...');

    if (!response.ok) {
      console.error('API error:', response.status, responseText);
      return res.status(response.status).json({
        error: `API error: ${response.status}`,
        message: responseText
      });
    }

    // Parse and return the response
    try {
      const data = JSON.parse(responseText);
      console.log('Successfully processed response');
      return res.status(200).json(data);
    } catch (error: any) {
      console.error('Failed to parse API response:', error);
      return res.status(500).json({
        error: 'Failed to parse API response',
        rawResponse: responseText.substring(0, 1000) // Include part of the raw response for debugging
      });
    }
  } catch (error: any) {
    console.error('Unhandled error in API handler:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
} 