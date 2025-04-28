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
  credits: number;
  resultCount: number;
  resultIndex?: number;
  results: RealEstateAPIProperty[];
  returnedResults: number; // For pagination
  statusCode: number;
  statusMessage: string;
  totalResults: number;
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
        `${apiProp.street || ''}, ${apiProp.city || ''}, ${apiProp.state || ''} ${apiProp.zip || ''}`,
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
  const size = Math.min(params.size || 5, 250);

  // Prepare request body based on structured params
  const requestBody: any = { ...params, size };
  // Remove undefined params to avoid sending empty values
  Object.keys(requestBody).forEach(
    (key) => requestBody[key] === undefined && delete requestBody[key],
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
    // console.log('Received RealEstateAPI response body:', JSON.stringify(responseData, null, 2)); // Uncomment for deep debug

    if (!response.ok || responseData.statusCode !== 200) {
      console.error('RealEstateAPI MLSSearch Error:', responseData);
      throw createErrorResponse(PluginErrorType.PluginApiError, {
        details: responseData,
        message: `API error: ${responseData.statusMessage || response.statusText} (Status: ${responseData.statusCode || response.status})`,
        statusCode: responseData.statusCode || response.status,
      });
    }

    // Map response to the format expected by the UI
    const mappedProperties = responseData.results.map((prop) => mapApiPropertyToUI(prop));

    return {
      data: mappedProperties,
      meta: {
        count: responseData.returnedResults,
        // Assuming resultIndex corresponds to offset
        limit: size,

        nextResultIndex: responseData.resultIndex,
        offset: params.resultIndex || 0,
        total: responseData.totalResults, // Pass along for pagination
      },
    };
  } catch (error: any) {
    // Handle fetch errors or errors thrown from createErrorResponse
    if (error.errorType) throw error; // Re-throw known plugin errors

    console.error('Error during RealEstateAPI MLSSearch fetch:', error);
    throw createErrorResponse(PluginErrorType.PluginApiError, {
      message: `Network error or failed to parse response: ${error.message}`,
    });
  }
};

/**
 * Get detailed information about a specific property by MLS ID (MOCK IMPLEMENTATION)
 * NOTE: Replace this with actual RealEstateAPI call if an endpoint exists.
 */
export const getPropertyDetails = async (propertyId: string, apiToken: string) => {
  console.warn('getPropertyDetails is using mock data!');
  if (!apiToken) {
    throw createErrorResponse(PluginErrorType.PluginSettingsInvalid, {
      message: 'API token is required',
    });
  }

  // Generate a somewhat realistic mock property based on ID
  const seed = Number.parseInt(propertyId.replaceAll(/\D/g, ''), 10) || 1000;
  const mockPool = seed % 3 === 0;
  const mockWaterfront = seed % 5 === 0;
  const mockStatus = seed % 4 === 0 ? 'Sold' : seed % 4 === 1 ? 'Pending' : 'Active';
  const mockBeds = 2 + (seed % 4); // 2-5 beds
  const mockBaths = 1.5 + (seed % 5) * 0.5; // 1.5 - 3.5 baths
  const mockLivingArea = 1000 + (seed % 15) * 100; // 1000 - 2400 sqft
  const mockPrice = 300_000 + (seed % 30) * 25_000; // $300k - $1.025M
  const mockYear = 1980 + (seed % 40); // 1980 - 2019
  const mockAgentName = `Agent ${String.fromCodePoint(65 + (seed % 26))}`; // Agent A-Z

  const mockProperty: any /* PropertyDetails type from UI */ = {
    // Use the input ID as listing ID for mock
    address: {
      city: 'Mock City',
      county: 'Mock County',
      full: `${100 + (seed % 900)} Mock St, Mock City, MC ${10_000 + (seed % 9000)}`,
      latitude: 34.0522 + (seed % 1000) * 0.0001,
      longitude: -118.2437 + (seed % 1000) * 0.0001,
      neighborhood: `Mock Subdivision ${seed % 10}`,
      state: 'MC',
      street: `${100 + (seed % 900)} Mock St`,
      unit: seed % 7 === 0 ? `Unit ${100 + (seed % 50)}` : undefined,
      zipCode: `${10_000 + (seed % 9000)}`,
    },

    agent: {
      email: `${mockAgentName.toLowerCase().replace(' ', '.')}@mockrealty.com`,
      name: mockAgentName,
      office: `Mock Realty ${String.fromCodePoint(65 + ((seed + 5) % 26))}`,
      officeEmail: `info@mockrealty${String.fromCodePoint(65 + ((seed + 5) % 26))}.com`,
      officePhone: `555-987-${1000 + (seed % 9000)}`,
      phone: `555-123-${1000 + (seed % 9000)}`,
    },
    id: propertyId,
    listing: {
      daysOnMarket: 5 + (seed % 60),
      hoaFees: seed % 10 === 0 ? 100 + (seed % 400) : 0,
      hoaFrequency: seed % 10 === 0 ? (seed % 2 === 0 ? 'Monthly' : 'Annually') : undefined,
      listedDate: new Date(Date.now() - (5 + (seed % 60)) * 24 * 60 * 60 * 1000).toISOString(),
      mlsNumber: `MOCK-${seed}`,
      price: mockPrice,
      pricePerSqFt: mockPrice / mockLivingArea,
      remarks: `This is a mock property description for ${propertyId}. It features ${mockBeds} bedrooms and ${mockBaths} bathrooms in ${mockLivingArea} sq ft. Built in ${mockYear}. ${mockPool ? 'Includes a pool.' : ''} ${mockWaterfront ? 'Located on the waterfront.' : ''}`,
      status: mockStatus,
      taxAnnualAmount: 5000 + (seed % 10_000),
      taxAssessedValue: mockPrice * 0.8 + (seed % (mockPrice * 0.1)),
      taxYear: new Date().getFullYear() - 1,
      virtualTourUrl: seed % 9 === 0 ? 'https://mock.virtual.tour/url' : undefined,
    },
    listingId: propertyId,
    media: {
      photos: [
        `https://source.unsplash.com/random/800x600?house,${seed}`,
        `https://source.unsplash.com/random/800x600?livingroom,${seed + 1}`,
        `https://source.unsplash.com/random/800x600?kitchen,${seed + 2}`,
        `https://source.unsplash.com/random/800x600?bedroom,${seed + 3}`,
        `https://source.unsplash.com/random/800x600?bathroom,${seed + 4}`,
        ...(mockPool ? [`https://source.unsplash.com/random/800x600?pool,${seed + 5}`] : []),
        ...(mockWaterfront
          ? [`https://source.unsplash.com/random/800x600?waterfront,${seed + 6}`]
          : []),
      ],
      virtualTour: seed % 9 === 0 ? 'https://mock.virtual.tour/url' : undefined,
    },
    property: {
      appliances: ['Dishwasher', 'Dryer', 'Microwave', 'Range', 'Refrigerator', 'Washer'], // Fixed field
      bathrooms: mockBaths,
      bedrooms: mockBeds,
      construction: 'Frame', // Fixed field
      cooling: 'Central Air', // Fixed field
      features: ['Balcony', 'Community Pool', 'Elevator', 'Fitness Center', 'Gated'], // Fixed field
      foundation: seed % 2 === 0 ? 'Slab' : undefined,
      garageSpaces: seed % 4,
      halfBaths: mockBaths % 1 === 0 ? 0 : 1,
      heating: 'Electric', // Fixed field
      livingArea: mockLivingArea,
      lotSize: mockPool ? 5000 + (seed % 5000) : undefined, // Only if pool
      parkingSpaces: seed % 4,
      pool: mockPool,
      propertyType: seed % 2 === 0 ? 'Condo' : 'Residential',
      roof: seed % 3 === 0 ? 'Tile' : 'Composition', // Fixed field
      spa: seed % 6 === 0,
      stories: 1 + (seed % 3),
      subType: seed % 2 === 0 ? 'Condominium' : 'Single Family Residence',
      view: mockWaterfront ? 'Water' : seed % 8 === 0 ? 'City' : undefined,
      waterfront: mockWaterfront,
      yearBuilt: mockYear,
    },
    schools: [
      {
        distance: 0.5 + (seed % 10) * 0.1,
        level: 'Elementary',
        name: `Mock Elementary ${String.fromCodePoint(65 + (seed % 26))}`,
        rating: 3 + (seed % 3),
      },
      {
        distance: 1 + (seed % 15) * 0.1,
        level: 'Middle',
        name: `Mock Middle ${String.fromCodePoint(65 + (seed % 26))}`,
        rating: 2 + (seed % 4),
      },
      {
        distance: 1.5 + (seed % 20) * 0.1,
        level: 'High',
        name: `Mock High ${String.fromCodePoint(65 + (seed % 26))}`,
        rating: 3 + (seed % 3),
      },
    ],
  };

  return mockProperty;
};

export default {
  getPropertyDetails,
  mlsSearch,
};
