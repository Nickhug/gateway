import { NextApiRequest, NextApiResponse } from 'next';

import MLSPlugin from '../../src/plugins/mls';

// Define types for our request bodies
// Matches the parameters defined in the manifest
interface MLSSearchBody {
  bathrooms_max?: number;
  bathrooms_min?: number;
  bedrooms_max?: number;
  bedrooms_min?: number;
  city?: string;
  days_on_market_max?: number;
  days_on_market_min?: number;
  has_pool?: boolean;
  include_photos?: boolean;
  is_water_front?: boolean;
  listing_price_max?: number;
  listing_price_min?: number;
  listing_property_type?: string;
  living_area_max?: number;
  living_area_min?: number;
  property_type?: string;
  resultIndex?: number;
  size?: number;
  state?: string;
  status?: string;
  year_built_max?: number;
  year_built_min?: number;
  zip?: string;
}

interface GetPropertyDetailsBody {
  propertyId: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json({
      message: 'This endpoint expects POST requests with API name and arguments',
      status: 'API is working',
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let parsedBody = req.body;
    if (typeof req.body === 'string') {
      try {
        parsedBody = JSON.parse(req.body);
      } catch (error) {
        console.error('Failed to parse request body string:', error);
        return res.status(400).json({ error: 'Invalid JSON in request body' });
      }
    }

    // Extract API name and arguments (assuming LobeChat format)
    const apiName = parsedBody.apiName || parsedBody.name;
    let args = parsedBody.arguments || parsedBody || {}; // Use body as args if arguments field is missing

    // Handle cases where arguments might be double-stringified
    if (typeof args === 'string') {
      try {
        args = JSON.parse(args);
      } catch (error) {
        console.error('Failed to parse arguments string:', error);
        // Potentially use the string directly if it's meant for a simple endpoint
      }
    }

    console.log(`Handling API request: ${apiName}`);
    // console.log('Arguments:', JSON.stringify(args, null, 2)); // Uncomment for deep debug

    if (!apiName) {
      console.error('Missing API name in request');
      return res.status(400).json({
        debug: { receivedBody: parsedBody },
        error: 'Missing API name (apiName or name) in request body',
      });
    }

    // Get the API token from environment
    const apiToken = process.env.REALESTATEAPI_KEY;
    if (!apiToken) {
      console.error(
        'RealEstateAPI Key (REALESTATEAPI_KEY) not configured in environment variables.',
      );
      return res.status(500).json({ error: 'API token not configured on server' });
    }

    switch (apiName) {
      case 'mlsSearch': {
        // Arguments are already structured from the manifest parameters
        const searchArgs: MLSSearchBody = args;

        console.log('Calling MLSPlugin.mlsSearch with args:', searchArgs);

        try {
          const result = await MLSPlugin.mlsSearch(searchArgs, apiToken);
          return res.status(200).json(result);
        } catch (error: any) {
          console.error('Error in MLSPlugin.mlsSearch call:', error);
          const statusCode = error.body?.statusCode || 500;
          const errorMessage =
            error.body?.message || error.message || 'Unknown error calling MLS Search plugin';
          return res.status(statusCode).json({
            details: error.body || undefined,
            error: `Error processing mlsSearch request: ${errorMessage}`,
          });
        }
      }

      case 'getPropertyDetails': {
        const detailArgs: GetPropertyDetailsBody = args;
        if (!detailArgs.propertyId) {
          return res
            .status(400)
            .json({ error: 'Missing propertyId argument for getPropertyDetails' });
        }

        console.log('Calling MLSPlugin.getPropertyDetails with propertyId:', detailArgs.propertyId);

        try {
          // Note: This still calls the mock implementation in the plugin
          const result = await MLSPlugin.getPropertyDetails(detailArgs.propertyId, apiToken);
          return res.status(200).json(result);
        } catch (error: any) {
          console.error('Error in MLSPlugin.getPropertyDetails call:', error);
          const statusCode = error.body?.statusCode || 500;
          const errorMessage =
            error.body?.message ||
            error.message ||
            'Unknown error calling Get Property Details plugin';
          return res.status(statusCode).json({
            details: error.body || undefined,
            error: `Error processing getPropertyDetails request: ${errorMessage}`,
          });
        }
      }

      default: {
        console.error(`Unknown API requested: ${apiName}`);
        return res.status(400).json({ error: `Unknown API: ${apiName}` });
      }
    }
  } catch (error: any) {
    console.error('Unexpected error in API handler:', error);
    return res.status(500).json({
      error: 'Unexpected server error',
      message: error.message || 'Unknown error',
    });
  }
}
