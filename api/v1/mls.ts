import { NextApiRequest, NextApiResponse } from 'next';

import MLSPlugin from '../../src/plugins/mls';

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
    // Log the raw received body for debugging
    console.log('Received request body:', typeof req.body, req.body);

    let parsedBody = req.body;
    if (typeof req.body === 'string') {
      try {
        parsedBody = JSON.parse(req.body);
      } catch (error) {
        console.error('Failed to parse request body string:', error);
        return res.status(400).json({
          error: 'Invalid JSON in request body',
          receivedBody: req.body,
        });
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
        // In case of error, attempt to use the string directly if possible
        args = { propertyId: args }; // Try using it as a property ID
      }
    }

    console.log(`Handling API request: ${apiName}`);
    console.log('Arguments:', JSON.stringify(args, null, 2)); // Always log for better debugging

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

      case 'getPropertyDetails': {
        const detailArgs: GetPropertyDetailsBody = args;
        if (!detailArgs.propertyId) {
          return res
            .status(400)
            .json({ error: 'Missing propertyId argument for getPropertyDetails' });
        }

        console.log('Calling MLSPlugin.getPropertyDetails with propertyId:', detailArgs.propertyId);

        try {
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
