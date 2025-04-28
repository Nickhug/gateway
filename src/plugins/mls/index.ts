/**
 * MLS API Plugin (RealEstateAPI)
 *
 * This plugin provides access to MLS data via the RealEstateAPI.
 */

// Define error type enum
enum PluginErrorType {
  BadRequest = 'BadRequest',
  PluginApiError = 'PluginApiError',
  PluginSettingsInvalid = 'PluginSettingsInvalid',
}

// Define error response creator
const createErrorResponse = (errorType: PluginErrorType, body?: any) => {
  return {
    body,
    errorType,
    success: false,
  };
};

// Matches parameters in the manifest & api handler
interface MLSSearchParams {
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

// Interface for the expected structure of a property from RealEstateAPI MLSSearch
// Based on common fields and parameters. Adjust based on actual API response.
interface RealEstateAPIProperty {
  address?: string;
  basement?: boolean;
  bathrooms?: number;
  bedrooms?: number;
  city?: string;
  city_view?: boolean;
  county?: string;
  days_on_market?: number;
  garage_spaces?: number;
  half_bathrooms?: number;
  id: number; // Assuming RealEstateAPI uses numeric ID
  latitude?: number;
  listed_date?: string; // ISO Date string?
  listing_agent_email?: string;
  listing_agent_name?: string;
  listing_agent_phone?: string;
  listing_id: string; // MLS listing ID
  listing_office_name?: string;
  listing_price?: number;
  listing_property_type?: string;
  living_area?: number; // Square footage
  longitude?: number;
  lot_size?: number; // Square footage
  mountain_view?: boolean;
  park_view?: boolean;
  photos?: string[]; // If include_photos=true
  pool?: boolean; // Often represented as 0 or 1, needs check
  price_per_sqft?: number;
  property_type?: string; // e.g., "SFR"
  remarks?: string;
  sold_date?: string; // ISO Date string?
  sold_price?: number;
  state?: string;
  status?: string;
  stories?: number;
  street?: string;
  subdivision?: string;
  virtual_tour_url?: string;
  water_front?: boolean;
  water_view?: boolean;
  year_built?: number;
  zip?: string;

  // Add other relevant fields from RealEstateAPI response
}

// Interface for the overall API response structure
interface RealEstateAPIResponse {
  credits?: number;
  // For pagination
  data: RealEstateAPIProperty[]; 
  // Keep for potential backward compat, but prefer resultCount
  input?: any; 
  // Added based on logs
  live?: boolean; 
  // Total results matching query
  recordCount?: number; 
  // Added based on logs
  requestExecutionTimeMS?: string; 
  resultCount?: number;
  // Results returned in this response (<= size)
  resultIndex?: number;
  // Changed from results to data
  returnedResults?: number; 
  // Keep for potential backward compat or other endpoints, but prefer recordCount
  statusCode: number; 
  statusMessage: string; 
  totalResults?: number; 
  // Added based on logs
  warning?: string; // Added based on logs
  // ... other potential meta fields
}

// Map RealEstateAPI response field names to our internal MLSProperty interface used by the UI
const mapApiPropertyToUI = (
  apiProp: RealEstateAPIProperty,
): any /* Use MLSProperty type from UI */ => {
  return {
    address: {
      city: apiProp.city || '',
      full:
        apiProp.address ||
        `${apiProp.street || ''}, ${apiProp.city || ''}, ${apiProp.state || ''}${apiProp.zip || ''}`,
      neighborhood: apiProp.subdivision || 'N/A',
      state: apiProp.state || '',
      street: apiProp.street || '',
      zipCode: apiProp.zip || '', // Assuming subdivision maps to neighborhood
    },
    agent: {
      email: apiProp.listing_agent_email || 'N/A',
      name: apiProp.listing_agent_name || 'N/A',
      office: apiProp.listing_office_name || 'N/A',
      phone: apiProp.listing_agent_phone || 'N/A',
    },

    id: `REAPI-${apiProp.id}`,

    listing: {
      daysOnMarket: apiProp.days_on_market || 0,
      listedDate: apiProp.listed_date || new Date().toISOString(),

      price: apiProp.listing_price || apiProp.sold_price || 0,

      remarks: apiProp.remarks || 'No description available.',
      // Prioritize listing price
      status: apiProp.status || 'N/A',
    },
    // Create a unique ID for UI keys
    listingId: apiProp.listing_id,
    media: {
      photos: apiProp.photos || [],
      virtualTour: apiProp.virtual_tour_url || undefined,
    },
    property: {
      // RealEstateAPI might return full/half separately or combined
      bathrooms: (apiProp.bathrooms || 0) + (apiProp.half_bathrooms || 0) * 0.5,

      bedrooms: apiProp.bedrooms || 0,

      garageSpaces: apiProp.garage_spaces || undefined,
      livingArea: apiProp.living_area || 0,
      lotSize: apiProp.lot_size || undefined,
      // Convert potential 0/1 to boolean
      pool: !!apiProp.pool,

      propertyType: apiProp.listing_property_type || apiProp.property_type || 'N/A',

      stories: apiProp.stories || undefined,

      view: apiProp.water_view
        ? 'Water'
        : apiProp.city_view
          ? 'City'
          : apiProp.mountain_view
            ? 'Mountain'
            : apiProp.park_view
              ? 'Park'
              : undefined,
      waterfront: !!apiProp.water_front,
      yearBuilt: apiProp.year_built || 0,
    },
  };
};

/**
 * Search property listings using RealEstateAPI MLSSearch endpoint
 */
export const mlsSearch = async (params: MLSSearchParams, apiToken: string) => {
  if (!apiToken) {
    throw createErrorResponse(PluginErrorType.PluginSettingsInvalid, {
      message: 'API token (REALESTATEAPI_KEY) is required',
    });
  }

  // Ensure size is within limits if not using ids_only mode
  const size = Math.min(params.size || 5, params.ids_only ? 10_000 : 250);

  // Prepare request body based on structured params
  const requestBody: any = { ...params, size };
  // Remove undefined params to avoid sending empty values
  Object.keys(requestBody).forEach(
    (key) => requestBody[key as keyof MLSSearchParams] === undefined && delete requestBody[key],
  );

  // Default include_photos to true if not specified, useful for UI
  if (requestBody.include_photos === undefined) {
    requestBody.include_photos = true;
  }

  console.log('Sending RealEstateAPI MLSSearch request:', JSON.stringify(requestBody));

  try {
    const response = await fetch('https://api.realestateapi.com/v2/MLSSearch', {
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiToken,
      },
      method: 'POST',
    });

    const responseData: RealEstateAPIResponse = await response.json();

    console.log('Received RealEstateAPI response status:', response.status);
    // Log the actual response body for debugging
    console.log('Actual RealEstateAPI Response Body:', JSON.stringify(responseData, null, 2));

    if (!response.ok || responseData.statusCode !== 200) {
      console.error('RealEstateAPI MLSSearch Error:', responseData);
      throw createErrorResponse(PluginErrorType.PluginApiError, {
        details: responseData,
        message: `API error: ${responseData.statusMessage || response.statusText} (Status: ${responseData.statusCode || response.status})`,
        statusCode: responseData.statusCode || response.status,
      });
    }

    // Map response using the correct field name 'data' - DEFENSIVE CHECK ADDED
    const resultsArray = Array.isArray(responseData.data) ? responseData.data : [];
    console.log(`Found ${resultsArray.length} results in the response data array.`);
    const mappedProperties = resultsArray.map((prop) => mapApiPropertyToUI(prop));

    // Check if it was an mls_number search that should return a single item
    if (params.mls_number && resultsArray.length === 1) {
      console.log('Returning single property due to mls_number search with one result.');
      return mappedProperties[0]; // Return the single mapped property directly
    }

    // Return the list format with metadata using correct fields from API response
    const totalResults = responseData.resultCount ?? 0;
    const returnedResults = responseData.recordCount ?? resultsArray.length;
    console.log(`Response meta: returned=${returnedResults}, total=${totalResults}`);

    return {
      data: mappedProperties,
      meta: {
        count: returnedResults,
        limit: size,
        nextResultIndex: responseData.resultIndex, // Keep this as is, might be undefined
        offset: params.resultIndex || 0,
        total: totalResults,
      },
    };
  } catch (error: any) {
    // Log the error causing the fetch/map issue
    console.error('Error during RealEstateAPI MLSSearch fetch or mapping:', error);
    // Handle fetch errors or errors thrown from createErrorResponse
    if (error.errorType) throw error; // Re-throw known plugin errors

    throw createErrorResponse(PluginErrorType.PluginApiError, {
      message: `Network error or failed processing response: ${error.message}`,
    });
  }
};

/**
 * Get detailed information about a specific property by MLS ID
 * This is now just a wrapper around mlsSearch for backward compatibility
 */
export const getPropertyDetails = async (propertyId: string, apiToken: string) => {
  if (!apiToken) {
    throw createErrorResponse(PluginErrorType.PluginSettingsInvalid, {
      message: 'API token is required',
    });
  }

  // Clean up the MLS ID (remove # if present)
  const cleanMlsId = propertyId.replace(/^#/, '');

  console.log(`Getting property details for MLS ID: ${cleanMlsId} (via mlsSearch)`);

  try {
    // Just call mlsSearch with the mls_number parameter
    // The modified mlsSearch will now return the single object directly if successful
    return await mlsSearch({ include_photos: true, mls_number: cleanMlsId }, apiToken);
  } catch (error: any) {
    // Re-throw with a more specific error message
    console.error('Error during getPropertyDetails:', error);

    // If it's already our error type, add more context and re-throw
    if (error.errorType) {
      error.body = error.body || {};
      error.body.message = `Failed to get property details for MLS ID ${cleanMlsId}: ${error.body.message || ''}`;
      throw error;
    }

    // Otherwise create a new error
    throw createErrorResponse(PluginErrorType.PluginApiError, {
      message: `Failed to get property details for MLS ID ${cleanMlsId}: ${error.message || 'Unknown error'}`,
    });
  }
};

export default {
  getPropertyDetails,
  mlsSearch,
};
