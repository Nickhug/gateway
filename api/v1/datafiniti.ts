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
    console.log('Full request body received:', JSON.stringify(req.body, null, 2));
    console.log('Query parameters:', JSON.stringify(req.query, null, 2));
    console.log('Request URL:', req.url);
    
    // Extract API name and arguments based on LobeChat plugin format
    // Try various possible formats from the LobeChat plugin request
    const apiName = req.body.name || 
                   req.body.apiName ||
                   req.query.name || 
                   (req.body.arguments && req.body.arguments.api) || 
                   req.body.api ||
                   (req.url && req.url.includes('searchBusinessData') ? 'searchBusinessData' : null) ||
                   (req.url && req.url.includes('searchProductData') ? 'searchProductData' : null);
                   
    console.log('Extracted API name:', apiName);
    
    // Try various possible formats for arguments
    const args = req.body.arguments || 
                req.body || 
                {};
                
    console.log('Extracted arguments:', typeof args, args);

    if (!apiName) {
      console.error('Missing API name');
      return res.status(400).json({ 
        error: 'Missing API name in request body',
        debug: {
          body: req.body,
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