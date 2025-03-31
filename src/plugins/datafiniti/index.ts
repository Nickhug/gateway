/**
 * Datafiniti API Plugin
 * 
 * This plugin provides access to the Datafiniti API which offers business, property,
 * product, and people data through a unified API.
 */

// Define error type enum
enum PluginErrorType {
  BadRequest = 'BadRequest',
  PluginSettingsInvalid = 'PluginSettingsInvalid',
  PluginApiError = 'PluginApiError',
}

// Define error response creator
const createErrorResponse = (errorType: PluginErrorType, body?: any) => {
  return {
    errorType,
    body,
    success: false,
  };
};

/**
 * Real Estate Property Search API Plugin
 * 
 * This plugin provides access to comprehensive property data for real estate analysis
 * and reporting. It supports detailed property searches with extensive filtering options.
 */

// Property search params interface with real estate specific fields
interface PropertySearchParams {
  query: string;
  format?: 'JSON' | 'CSV';
  num_records?: number;
  view?: string;
}

// Valid property fields for reference
const VALID_PROPERTY_FIELDS = [
  'address', 'city', 'country', 'province', 'postalCode',
  'propertyType', 'title', 'listingName', 'mlsNumber',
  'numBedroom', 'numBathroom', 'numFloor', 'yearBuilt',
  'lotSizeValue', 'lotSizeUnit', 'floorSizeValue', 'floorSizeUnit',
  'numGarage', 'numParking', 'numStories', 'numParkingTotal',
  'parkingFeatures', 'basement', 'zoning', 'topographyCode',
  'latitude', 'longitude', 'geoLocation', 'subdivision', 'neighborhood',
  'prices', 'propertyTaxes', 'taxAssessedValue', 'hoaFees', 'transactions',
  'dateAdded', 'dateUpdated', 'mostRecentStatus', 'statuses',
  'daysOnMarket', 'saleDate', 'saleTransactionTypeDesc',
  'features', 'appliances', 'architecturalStyles', 'buildingCondition',
  'buildingMaterials', 'coolingType', 'exterior', 'fireplace', 'flooring',
  'heatingFuel', 'heatingSystem', 'interiorFeatures', 'landscaping',
  'laundryFeatures', 'poolFeatures', 'roofing', 'utilities', 'view',
  'waterfront', 'constructionType',
  'buildingClass', 'buildingStatus', 'buildingUse', 'capRate', 'propertySubType',
  'businessType', 'businessName', 'buildingName', 'vacancy', 'occupancyRate',
  'netOperatingIncome', 'grossIncome', 'expenses', 'taxYear', 'tenants',
  'absenteeOwner', 'contactOwner', 'lien', 'trustDescription',
  'brokers', 'source', 'sourceURLs', 'sourcing', 'websiteIDs',
  'amenities', 'foreclosure', 'parcelNumber', 'schoolDistrict',
  'schools', 'subdivisions'
];

/**
 * Search property listings with detailed filtering options
 */
export const searchProperties = async (params: PropertySearchParams, apiToken: string) => {
  if (!apiToken) {
    throw createErrorResponse(PluginErrorType.PluginSettingsInvalid, {
      message: 'API token is required',
    });
  }

  // Format the query according to formatting rules if needed
  const formattedQuery = formatPropertyQuery(params.query);

  const { 
    format = 'JSON', 
    num_records = 10, 
    view = 'property_full'
  } = params;

  try {
    // Simple request with essential parameters only
    const requestBody = {
      query: formattedQuery,
      format,
      num_records,
      view,
      download: false // Always set to false for direct response
    };

    console.log('Sending property search request:', JSON.stringify(requestBody));

    const response = await fetch('https://api.datafiniti.co/v4/properties/search', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API error response:', errorText);
      throw createErrorResponse(PluginErrorType.PluginApiError, {
        message: `API error: ${errorText}`,
      });
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    if (error.errorType) throw error;
    
    console.error('Error in searchProperties:', error.message);
    throw createErrorResponse(PluginErrorType.PluginApiError, {
      message: `Error connecting to API: ${error.message}`,
    });
  }
};

/**
 * Format a property query according to the specific formatting rules
 * 
 * Rules:
 * 1. Format boolean operators in UPPERCASE with spaces: "AND", "OR", "NOT"
 * 2. Format field names without quotes: city:Austin, numBedroom:3
 * 3. Only use quotes for values with spaces: propertyType:"Single Family Dwelling"
 * 4. Format date ranges as: saleDate:[2023-01-01 TO 2023-12-31]
 * 5. No quotes for numeric values or province codes: province:TX, numBathroom:2
 * 6. Use mostRecentPriceAmount, NOT prices: mostRecentPriceAmount:[300000 TO 500000]
 * 7. Format property status without quotes for Sold: mostRecentStatus:Sold
 * 8. Use double quotes for values with spaces: city:"Dallas"
 * 9. For price ranges, format as: mostRecentPriceAmount:[300000 TO 500000]
 * 10. For any value field, use [value TO *] format for minimum values
 */
const formatPropertyQuery = (query: string): string => {
  if (!query) return '';
  
  // Ensure boolean operators are uppercase with spaces
  const formattedQuery = query
    .replace(/\b(and)\b/gi, 'AND')
    .replace(/\b(or)\b/gi, 'OR')
    .replace(/\b(not)\b/gi, 'NOT')
    
    // Replace any 'prices' field with 'mostRecentPriceAmount'
    .replace(/\bprices\s*:/gi, 'mostRecentPriceAmount:');
  
  return formattedQuery;
};

/**
 * Get detailed information about a specific property by ID
 */
export const getPropertyById = async (propertyId: string, apiToken: string) => {
  if (!apiToken) {
    throw createErrorResponse(PluginErrorType.PluginSettingsInvalid, {
      message: 'API token is required',
    });
  }

  try {
    const response = await fetch(`https://api.datafiniti.co/v4/properties/${propertyId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw createErrorResponse(PluginErrorType.PluginApiError, {
        message: `API error: ${errorText}`,
      });
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    if (error.errorType) throw error;
    
    throw createErrorResponse(PluginErrorType.PluginApiError, {
      message: `Error connecting to API: ${error.message}`,
    });
  }
};

export default {
  searchProperties,
  getPropertyById,
}; 