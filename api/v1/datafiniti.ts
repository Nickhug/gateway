import { NextRequest } from 'next/server';
import { createGatewayOnEdgeRuntime } from '../../src';
import datafinitiPlugin from '../../src/plugins/datafiniti';

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
    const apiToken = process.env.DATAFINITI_API_TOKEN;

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