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

    const parsedArgs = JSON.parse(args);
    const apiToken = process.env.DATAFINITI_API_TOKEN || '';
    
    if (!apiToken) {
      return res.status(500).json({ error: 'API token not configured' });
    }

    let result;
    switch (apiName) {
      case 'searchBusinessData':
        result = await datafinitiPlugin.searchBusinessData(parsedArgs, apiToken);
        break;
      case 'searchProductData':
        result = await datafinitiPlugin.searchProductData(parsedArgs, apiToken);
        break;
      case 'getDownloadStatus':
        result = await datafinitiPlugin.getDownloadStatus(parsedArgs.downloadId, apiToken);
        break;
      default:
        return res.status(400).json({ error: `Unknown API: ${apiName}` });
    }

    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
} 