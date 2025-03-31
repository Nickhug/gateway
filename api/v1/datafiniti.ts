import { NextApiRequest, NextApiResponse } from 'next';
import datafinitiPlugin from '../../src/plugins/datafiniti';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { arguments: args, name: apiName } = req.body;

    if (!apiName || !args) {
      return res.status(400).json({ error: 'Invalid request body' });
    }

    console.log(`API request received: ${apiName}`, req.body);
    
    const parsedArgs = JSON.parse(args);
    const apiToken = process.env.DATAFINITI_API_TOKEN || '';
    
    if (!apiToken) {
      return res.status(500).json({ error: 'API token not configured' });
    }

    let result;
    switch (apiName) {
      case 'searchProperties':
        console.log('Executing searchProperties with query:', parsedArgs.query);
        result = await datafinitiPlugin.searchProperties(parsedArgs, apiToken);
        break;
      case 'getPropertyById':
        console.log('Executing getPropertyById with ID:', parsedArgs.propertyId);
        result = await datafinitiPlugin.getPropertyById(parsedArgs.propertyId, apiToken);
        break;
      // For backward compatibility
      case 'searchBusinessData':
        console.log('Executing legacy searchBusinessData with query:', parsedArgs.query);
        result = await datafinitiPlugin.searchProperties({
          ...parsedArgs,
          query: parsedArgs.query.includes('categories:') 
            ? parsedArgs.query 
            : `categories:"real estate" AND ${parsedArgs.query}`
        }, apiToken);
        break;
      default:
        return res.status(400).json({ error: `Unknown API: ${apiName}` });
    }

    console.log(`API response for ${apiName}: ${result ? 'success' : 'empty'}`);
    return res.status(200).json(result);
  } catch (error: any) {
    console.error('API handler error:', error);
    const statusCode = error.statusCode || 500;
    return res.status(statusCode).json({ 
      error: error.message || 'Internal server error',
      errorType: error.errorType 
    });
  }
} 