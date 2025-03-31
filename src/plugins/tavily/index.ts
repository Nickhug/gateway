/**
 * Tavily API Plugin
 * 
 * This plugin provides access to the Tavily API, which offers a search engine
 * optimized for LLMs with efficient, quick and persistent search results.
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

interface TavilySearchParams {
  query: string;
  search_depth?: 'basic' | 'advanced';
  include_domains?: string[];
  exclude_domains?: string[];
  include_answer?: boolean;
  max_results?: number;
}

export const search = async (params: TavilySearchParams, apiKey: string) => {
  if (!apiKey) {
    throw createErrorResponse(PluginErrorType.PluginSettingsInvalid, {
      message: 'Tavily API key is required',
    });
  }

  try {
    const response = await fetch('https://api.tavily.com/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw createErrorResponse(PluginErrorType.PluginApiError, {
        message: `Tavily API error: ${errorText}`,
      });
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    if (error.errorType) throw error;
    
    throw createErrorResponse(PluginErrorType.PluginApiError, {
      message: `Error connecting to Tavily API: ${error.message}`,
    });
  }
};

export const searchWithQuestion = async (question: string, apiKey: string) => {
  return search({ query: question }, apiKey);
};

export const advancedSearch = async (
  question: string, 
  includeAnswer: boolean = true,
  searchDepth: 'basic' | 'advanced' = 'advanced',
  maxResults: number = 10,
  apiKey: string
) => {
  return search({
    query: question,
    search_depth: searchDepth,
    include_answer: includeAnswer,
    max_results: maxResults
  }, apiKey);
};

export default {
  search,
  searchWithQuestion,
  advancedSearch,
}; 