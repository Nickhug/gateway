import { NextApiRequest, NextApiResponse } from 'next';
import tavilyPlugin from '../../src/plugins/tavily';

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
    
    // Add logging here to inspect parsedBody just before apiName extraction
    console.log('Inspecting parsedBody before apiName extraction:', JSON.stringify(parsedBody, null, 2));
    
    // Extract API name from URL path if present
    let apiNameFromUrl = null;
    if (req.url) {
      const urlPath = req.url.split('?')[0];
      // If URL contains a segment like /api/v1/tavily/search
      const pathSegments = urlPath.split('/');
      const lastSegment = pathSegments[pathSegments.length - 1];
      const secondLastSegment = pathSegments[pathSegments.length - 2]; 
      
      // If it looks like /tavily/search or ends with /search
      if (secondLastSegment === 'tavily' && lastSegment) {
        apiNameFromUrl = lastSegment;
      } else if (lastSegment.includes('search') || lastSegment.includes('get')) {
        apiNameFromUrl = lastSegment;
      }
    }
    
    // Extract API name and arguments based on LobeChat plugin format
    const apiName = parsedBody.name || 
                   parsedBody.apiName ||
                   apiNameFromUrl ||
                   req.query.name || 
                   (parsedBody.arguments && parsedBody.arguments.api) || 
                   parsedBody.api ||
                   (req.url && req.url.includes('searchWeb') ? 'search' : null) ||
                   (req.url && req.url.includes('searchWithQuestion') ? 'searchWithQuestion' : null);
                   
    console.log('Extracted API name:', apiName);
    
    // Try various possible formats for arguments
    const args = parsedBody.arguments || 
                parsedBody || 
                {};
                
    console.log('Extracted arguments:', typeof args, args);

    if (!apiName) {
      // If URL contains 'tavily', assume we want to search
      if (req.url && req.url.toLowerCase().includes('tavily')) {
        console.log('Using fallback API name "search" based on URL containing tavily');
        // Force the "search" endpoint
        const forcedApiName = 'search';
        
        // Continue with forcedApiName
        let query = '';
        if (parsedBody && parsedBody.query) {
          query = parsedBody.query;
        } else if (typeof req.body === 'string') {
          try {
            const bodyObj = JSON.parse(req.body);
            query = bodyObj.query || '';
          } catch (e) {
            // If we can't parse the body, try to extract a query from the URL
            const queryParam = req.query.query;
            if (queryParam) {
              query = Array.isArray(queryParam) ? queryParam[0] : queryParam;
            }
          }
        }
        
        // Default query if nothing else works
        if (!query) query = "latest news headlines";
        
        const searchDepth = (parsedBody && parsedBody.search_depth) ? 
                            parsedBody.search_depth : 
                            'basic';
        
        const apiKey = process.env.TAVILY_API_KEY || '';
        if (!apiKey) {
          return res.status(500).json({ error: 'API key not configured' });
        }
        
        try {
          console.log('Making Tavily search call with:', { query, searchDepth });
          const result = await tavilyPlugin.search({ 
            query, 
            search_depth: searchDepth 
          }, apiKey);
          
          return res.status(200).json(result);
        } catch (error: any) {
          console.error('Failed to call Tavily search (fallback):', error);
          return res.status(500).json({
            error: 'Failed to call Tavily search',
            // Log the full error object for detailed diagnostics
            details: error ? JSON.stringify(error) : 'Unknown error object during Tavily fallback search'
          });
        }
      }
      
      console.error('Missing API name');
      return res.status(400).json({ 
        error: 'Invalid request body',
        debug: {
          rawBody: typeof req.body === 'string' ? req.body : JSON.stringify(req.body),
          parsedBody: parsedBody,
          query: req.query,
          url: req.url
        }
      });
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

    const apiKey = process.env.TAVILY_API_KEY || '';
    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    let result;
    switch (apiName) {
      case 'search':
      case 'searchWeb':
        // Handle both directly passed query strings and parsed objects
        if (typeof parsedArgs === 'string') {
          try {
            parsedArgs = JSON.parse(parsedArgs);
          } catch (e) {
            // If we can't parse it, create a default query object
            parsedArgs = { query: parsedArgs };
          }
        } else if (!parsedArgs.query && parsedArgs.arguments) {
          // Handle the case where the arguments field contains the actual parameters
          try {
            const argumentsObj = typeof parsedArgs.arguments === 'string' ? 
                                JSON.parse(parsedArgs.arguments) : 
                                parsedArgs.arguments;
            parsedArgs = argumentsObj;
          } catch (e) {
            console.error('Failed to parse nested arguments:', e);
          }
        }
        
        console.log('Final search params:', parsedArgs);
        result = await tavilyPlugin.search(parsedArgs, apiKey);
        break;
      case 'searchWithQuestion':
        result = await tavilyPlugin.searchWithQuestion(parsedArgs.question, apiKey);
        break;
      case 'advancedSearch':
        result = await tavilyPlugin.advancedSearch(
          parsedArgs.question,
          parsedArgs.includeAnswer,
          parsedArgs.searchDepth,
          parsedArgs.maxResults,
          apiKey
        );
        break;
      default:
        return res.status(400).json({ error: `Unknown API: ${apiName}` });
    }

    return res.status(200).json(result);
  } catch (error: any) {
    console.error('Unhandled error in Tavily API handler:', error);
    return res.status(500).json({ 
      error: 'Internal server error', 
      // Log the full error object for detailed diagnostics
      details: error ? JSON.stringify(error) : 'Unknown error object in main handler' 
    });
  }
} 