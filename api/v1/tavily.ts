import { NextRequest } from 'next/server';
import { createGatewayOnEdgeRuntime } from '../../src';
import tavilyPlugin from '../../src/plugins/tavily';

export const config = {
  runtime: 'edge',
};

const pluginGateway = createGatewayOnEdgeRuntime();

export default async function handler(req: NextRequest) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    const body = await req.json();
    const { arguments: args, name: apiName } = body;

    if (!apiName || !args) {
      return new Response(JSON.stringify({ error: 'Invalid request body' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const parsedArgs = JSON.parse(args);
    const apiKey = process.env.TAVILY_API_KEY;

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
        return new Response(JSON.stringify({ error: `Unknown API: ${apiName}` }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        });
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 