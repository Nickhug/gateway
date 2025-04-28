import { NextApiRequest, NextApiResponse } from 'next';
import { Readable } from 'node:stream';

import MLSPlugin from '../../src/plugins/mls';

// Helper function to read raw body from stream
async function getRawBody(readable: Readable): Promise<Buffer> {
  const chunks: Buffer[] = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

// Define types for our request bodies (matching the expanded parameters in our plugin)
interface MLSSearchBody {
  // Status
  active?: boolean;
  // Location
  address?: string;
  // Rooms
  bathrooms?: number;
  bathrooms_max?: number;
  bathrooms_min?: number;
  bedrooms?: number;
  bedrooms_max?: number;
  bedrooms_min?: number;
  // Status
  cancelled?: boolean;
  // Location
  city?: string;
  // API behavior
  count?: boolean;
  county?: string;
  // Market
  days_on_market_max?: number;
  days_on_market_min?: number;
  // Status
  failed?: boolean;
  // Features
  has_basement?: boolean;
  has_photos?: boolean;
  has_pool?: boolean;
  // Location
  house?: string;
  // Identification
  id?: number;
  // API behavior
  ids_only?: boolean;
  include_photos?: boolean;
  // Features
  is_city_view?: boolean;
  is_mountain_view?: boolean;
  is_park_view?: boolean;
  is_water_front?: boolean;
  is_water_view?: boolean;
  // Dates
  last_status_change_date_max?: string;
  last_status_change_date_min?: string;
  // Location based search
  latitude?: number;
  // Agents
  listing_agent_email?: string;
  listing_agent_id?: string;
  // Dates
  listing_contract_date_max?: string;
  listing_contract_date_min?: string;
  listing_date_max?: string;
  listing_date_min?: string;
  // Identification
  listing_id?: number;
  // Price
  listing_price_max?: number;
  listing_price_min?: number;
  // Property characteristics
  listing_property_type?: string;
  // Size
  living_area?: number;
  living_area_max?: number;
  living_area_min?: number;
  // Location based search
  longitude?: number;
  // Size
  lot_size?: number;
  lot_size_max?: number;
  lot_size_min?: number;
  // Identification
  mls_number?: string;
  // Dates
  modification_timestamp_max?: string;
  modification_timestamp_min?: string;
  // API behavior
  obfuscate?: boolean;
  // Status
  pending?: boolean;
  // Dates
  price_change_timestamp_max?: string;
  price_change_timestamp_min?: string;
  // Price
  price_per_sqft_max?: number;
  price_per_sqft_min?: number;
  // Property characteristics
  property_sub_type?: string;
  property_type?: string;
  // Public record info
  public_absentee_type?: boolean;
  public_document_type?: string;
  public_document_type_code?: string;
  public_land_use?: string;
  public_property_use?: string;
  public_property_use_code?: number;
  // Location based search
  radius?: number;
  // API behavior
  resultIndex?: number;
  // Agents
  selling_agent_email?: string;
  selling_agent_id?: string;
  // API behavior
  size?: number;
  // Status
  sold?: boolean;
  // Dates
  sold_date_max?: string;
  sold_date_min?: string;
  // Price
  sold_price?: number;
  // Location
  state?: string;
  // Status
  status?: string;
  // Size
  stories?: number;
  // Location
  street?: string;
  // API behavior
  summary?: boolean;
  // Location
  unit?: string;
  unit_type?: string;
  // Age
  year_built?: number;
  year_built_max?: number;
  year_built_min?: number;
  // Location
  zip?: string;
}

// Disable Next.js body parsing for this route
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // --- START Request Logging ---
  console.log(`--- New Request: ${new Date().toISOString()} ---`);
  console.log('Request Method:', req.method);
  console.log('Request URL:', req.url);
  console.log('Request Headers:', JSON.stringify(req.headers, null, 2));

  const rawBody = await getRawBody(req);
  const rawBodyString = rawBody.toString('utf8');
  console.log('Raw Request Body:', rawBodyString);
  // --- END Request Logging ---

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
    let parsedBody: any;
    try {
      // Attempt to parse the raw body as JSON
      parsedBody = JSON.parse(rawBodyString);
    } catch (error) {
      console.error('Failed to parse raw request body string:', error);
      return res.status(400).json({
        error: 'Invalid JSON in request body',
        receivedBody: rawBodyString,
      });
    }

    console.log('Parsed Request Body:', parsedBody);

    // Attempt to extract apiName and arguments
    let apiName = parsedBody.apiName || parsedBody.name;
    let args: any = parsedBody.arguments;

    // **Fallback Logic: If apiName is missing, assume mlsSearch and use parsedBody as args**
    if (apiName) {
      // If apiName *was* present, try to parse the arguments field (if it's a string)
      if (typeof args === 'string') {
        try {
          args = JSON.parse(args);
        } catch (error) {
          console.error('Failed to parse arguments string (when apiName was present):', error);
          return res.status(400).json({
            argumentsValue: parsedBody.arguments,
            error: 'Invalid JSON in arguments field',
          });
        }
      } else if (typeof args !== 'object' || args === null) {
        // Handle cases where arguments is present but not a string or object (invalid)
        console.error('Invalid arguments field type (expected string or object):', typeof args);
        return res.status(400).json({
          argumentsValue: args,
          error: 'Invalid arguments field type in request body',
        });
      }
    } else {
      console.warn(
        "Missing apiName field. Assuming 'mlsSearch' and using request body as arguments.",
      );
      apiName = 'mlsSearch'; // Default API name for this endpoint
      args = parsedBody; // Use the whole parsed body as arguments
    }

    console.log(`Handling API request: ${apiName}`);
    console.log('Final Arguments:', JSON.stringify(args, null, 2));

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
        // Ensure args is an object after potentially complex parsing/fallback
        if (typeof args !== 'object' || args === null) {
          // It's unlikely to hit this now with the parsing logic above, but good safety check
          return res
            .status(400)
            .json({ error: 'Internal Server Error: Invalid arguments structure after processing' });
        }

        const searchArgs: MLSSearchBody = args as MLSSearchBody;

        // Convert numeric string values to numbers
        Object.keys(searchArgs).forEach((key) => {
          const value = searchArgs[key as keyof MLSSearchBody];
          if (
            typeof value === 'string' &&
            [
              'bedrooms',
              'bedrooms_min',
              'bedrooms_max',
              'bathrooms',
              'bathrooms_min',
              'bathrooms_max',
              'listing_price_min',
              'listing_price_max',
              'living_area',
              'living_area_min',
              'living_area_max',
              'lot_size',
              'lot_size_min',
              'lot_size_max',
              'year_built',
              'year_built_min',
              'year_built_max',
              'days_on_market_min',
              'days_on_market_max',
              'stories',
              'radius',
              'size',
              'resultIndex',
              'price_per_sqft_min',
              'price_per_sqft_max',
              'sold_price',
              'id',
              'listing_id',
              'latitude',
              'longitude',
              'public_property_use_code',
            ].includes(key) &&
            !Number.isNaN(Number(value))
          ) {
            (searchArgs as any)[key] = Number(value);
          }

          // Convert string boolean values to actual booleans
          if (
            typeof value === 'string' &&
            ['true', 'false'].includes(value.toLowerCase()) &&
            [
              'has_pool',
              'has_basement',
              'has_photos',
              'is_city_view',
              'is_mountain_view',
              'is_park_view',
              'is_water_view',
              'is_water_front',
              'active',
              'cancelled',
              'failed',
              'pending',
              'sold',
              'include_photos',
              'count',
              'ids_only',
              'summary',
              'obfuscate',
              'public_absentee_type',
            ].includes(key)
          ) {
            (searchArgs as any)[key] = value.toLowerCase() === 'true';
          }
        });

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

      default: {
        // This case should technically not be reached if the fallback works,
        // but kept for robustness.
        console.error(`Unknown or unsupported API requested: ${apiName}`);
        return res.status(400).json({ error: `Unknown or unsupported API: ${apiName}` });
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
