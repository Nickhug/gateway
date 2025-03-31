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

interface DatafinitiSearchParams {
  query: string;
  format?: 'JSON' | 'CSV';
  num_records?: number;
  view?: string;
  download?: boolean;
}

export const searchBusinessData = async (params: DatafinitiSearchParams, apiToken: string) => {
  if (!apiToken) {
    throw createErrorResponse(PluginErrorType.PluginSettingsInvalid, {
      message: 'Datafiniti API token is required',
    });
  }

  const { query, format = 'JSON', num_records = 10, view = 'business_basic', download = false } = params;

  try {
    const response = await fetch('https://api.datafiniti.co/v4/businesses/search', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        format,
        num_records,
        view,
        download,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw createErrorResponse(PluginErrorType.PluginApiError, {
        message: `Datafiniti API error: ${errorText}`,
      });
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    if (error.errorType) throw error;
    
    throw createErrorResponse(PluginErrorType.PluginApiError, {
      message: `Error connecting to Datafiniti API: ${error.message}`,
    });
  }
};

export const searchProductData = async (params: DatafinitiSearchParams, apiToken: string) => {
  if (!apiToken) {
    throw createErrorResponse(PluginErrorType.PluginSettingsInvalid, {
      message: 'Datafiniti API token is required',
    });
  }

  const { query, format = 'JSON', num_records = 10, view = 'product_basic', download = false } = params;

  try {
    const response = await fetch('https://api.datafiniti.co/v4/products/search', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        format,
        num_records,
        view,
        download,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw createErrorResponse(PluginErrorType.PluginApiError, {
        message: `Datafiniti API error: ${errorText}`,
      });
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    if (error.errorType) throw error;
    
    throw createErrorResponse(PluginErrorType.PluginApiError, {
      message: `Error connecting to Datafiniti API: ${error.message}`,
    });
  }
};

export const getDownloadStatus = async (downloadId: string, apiToken: string) => {
  if (!apiToken) {
    throw createErrorResponse(PluginErrorType.PluginSettingsInvalid, {
      message: 'Datafiniti API token is required',
    });
  }

  try {
    const response = await fetch(`https://api.datafiniti.co/v4/downloads/${downloadId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw createErrorResponse(PluginErrorType.PluginApiError, {
        message: `Datafiniti API error: ${errorText}`,
      });
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    if (error.errorType) throw error;
    
    throw createErrorResponse(PluginErrorType.PluginApiError, {
      message: `Error connecting to Datafiniti API: ${error.message}`,
    });
  }
};

export default {
  searchBusinessData,
  searchProductData,
  getDownloadStatus,
}; 