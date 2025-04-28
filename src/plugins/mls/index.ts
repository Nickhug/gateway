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
// Updated based on actual API response logs
interface RealEstateAPIProperty {
  id: number; // Top-level ID from the API
  listing?: {
    // Alphabetized keys within listing
    address?: {
      city?: string;
      countyOrParish?: string;
      stateOrProvince?: string;
      unparsedAddress?: string;
      zipCode?: string;
    };
    courtesyOf?: string;
    customStatus?: string;
    hasPhotos?: boolean;
    internetAddressDisplayYN?: boolean;
    isListed?: boolean;
    leadTypes?: any; 
    listPriceLow?: number;
    // Contains various boolean flags
    listingAgentEmailAddress?: string;
    listingContractDate?: string;
    media?: {
      // Alphabetized keys within media
      photosCount?: string; // Note: API returns string, convert to number
      photosList?: Array<{ highRes?: string, lowRes?: string; midRes?: string; }>;
      primaryListingImageUrl?: string;
    };
    mlsBoardCode?: string;
    mlsNumber?: string;
    priceChangeTimestamp?: string;
    pricePerSqFt?: number;
    property?: {
      // Alphabetized keys within property
      associationFee?: number;
      bathroomsText?: string;
      bathroomsTotal?: number;
      bedroomsTotal?: number;
      garageSpaces?: number;
      hasBasement?: boolean;
      hasPool?: boolean;
      isCityView?: boolean;
      isMountainView?: boolean;
      isParkView?: boolean;
      isWaterFront?: boolean;
      isWaterView?: boolean;
      latitude?: number;
      livingArea?: number;
      location?: string; // e.g., "POINT(-80.178436279297 25.840671539307)"
      longitude?: number;
      lotSizeSquareFeet?: number;
      propertySubType?: string[];
      propertyType?: string;
      stories?: number;
      subdivisionName?: string;
      yearBuilt?: string; // Note: API returns string, convert to number
    };
    publicRemarks?: string;
    schools?: any;
    standardStatus?: string;
    url?: string;
  };
  listingAgent?: {
    // Alphabetized keys within listingAgent
    email?: string;
    firstName?: string;
    fullName?: string;
    lastName?: string;
    mlsCode?: string;
    phone?: string;
  };
  listingId: string; // Top-level listingId (often matches mlsNumber)
  listingOffice?: {
    // Alphabetized keys within listingOffice
    address?: string;
    city?: string;
    email?: string;
    mlsCode?: string;
    name?: string;
    phone?: string;
    postalCode?: string;
    stateOrProvince?: string;
  };
  modificationTimestamp?: string;
  public?: any; // Contains detailed public record data
  sellingAgent?: any;
  sellingOffice?: any;
}

// Interface for the overall API response structure
interface RealEstateAPIResponse {
  credits?: number;
  data: RealEstateAPIProperty[]; // Changed from results to data
  input?: any; // Added based on logs
  live?: boolean; // Added based on logs
  recordCount?: number; // Results returned in this response (<= size)
  requestExecutionTimeMS?: string; // Added based on logs
  resultCount?: number; // Total results matching query
  resultIndex?: number; // For pagination
  returnedResults?: number; // Keep for potential backward compat or other endpoints, but prefer recordCount
  statusCode: number;
  statusMessage: string;
  totalResults?: number; // Keep for potential backward compat, but prefer resultCount
  warning?: string; // Added based on logs
  // ... other potential meta fields
}

// Map RealEstateAPI response field names to our internal MLSProperty interface used by the UI
// ** REVISED MAPPING LOGIC **
const mapApiPropertyToUI = (
  apiProp: RealEstateAPIProperty,
): any /* Use MLSProperty type from UI */ => {
  const listing = apiProp.listing || {};
  const property = listing.property || {};
  const address = listing.address || {};
  const agent = apiProp.listingAgent || {};
  const office = apiProp.listingOffice || {};
  const media = listing.media || {};
  const leadTypes = listing.leadTypes || {};

  const photos = (media.photosList || [])
    .map((p) => p.highRes || p.midRes || p.lowRes)
    .filter(Boolean) as string[];

  return {
    address: {
      city: address.city || '',
      full:
        address.unparsedAddress ||
        `${address.city || ''}, ${address.stateOrProvince || ''} ${address.zipCode || ''}`,
      neighborhood: property.subdivisionName || 'N/A',
      state: address.stateOrProvince || '',
      street: address.unparsedAddress || '', // Best guess if unparsedAddress exists
      zipCode: address.zipCode || '',
    },
    agent: {
      email: agent.email || 'N/A',
      name: agent.fullName || `${agent.firstName || ''} ${agent.lastName || ''}`.trim() || 'N/A',
      office: office.name || 'N/A',
      phone: agent.phone || 'N/A',
    },
    id: `REAPI-${apiProp.id}`, // Use the top-level API ID
    listing: {
      daysOnMarket: Number(leadTypes.mlsDaysOnMarket) || 0,
      listedDate: listing.listingContractDate || new Date().toISOString(),
      price: listing.listPriceLow || 0,
      remarks: listing.publicRemarks || 'No description available.',
      status: listing.standardStatus || listing.customStatus || 'N/A',
    },
    listingId: listing.mlsNumber || apiProp.listingId, // Prefer MLS number from listing object
    media: {
      photos: photos,
      virtualTour: undefined, // Virtual tour URL not obvious in logged response, add later if found
    },
    property: {
      bathrooms: property.bathroomsTotal || 0,
      bedrooms: property.bedroomsTotal || 0,
      garageSpaces: property.garageSpaces || undefined,
      livingArea: property.livingArea || 0,
      lotSize: property.lotSizeSquareFeet || undefined,
      pool: !!property.hasPool, // Check boolean flag
      propertyType: property.propertyType || 'N/A',
      stories: property.stories || undefined,
      view: property.isWaterView
        ? 'Water'
        : property.isCityView
          ? 'City'
          : property.isMountainView
            ? 'Mountain'
            : property.isParkView
              ? 'Park'
              : undefined,
      waterfront: !!property.isWaterFront, // Check boolean flag
      yearBuilt: Number(property.yearBuilt) || 0, // Convert string year to number
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
        nextResultIndex: responseData.resultIndex === null ? undefined : responseData.resultIndex, // Explicitly handle null
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
