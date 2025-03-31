import { NextApiRequest, NextApiResponse } from 'next';
import tavilyPlugin from '../../src/plugins/tavily';

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
    const apiKey = process.env.TAVILY_API_KEY || '';
    
    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    let result;
    switch (apiName) {
      case 'search':
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
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
} 