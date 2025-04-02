import type { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

// Helper function to extract all unique tags from plugins
const extractAllTags = (plugins: any[]) => {
  const allTags = new Set<string>();
  plugins.forEach((plugin) => {
    plugin.meta.tags.forEach((tag: string) => {
      allTags.add(tag);
    });
  });
  return Array.from(allTags);
};

// Convert legacy plugin format to Lobe Chat format
const convertToLobeFormat = (plugins: any[]) => {
  return plugins.map((plugin) => ({
    author: plugin.author || 'NickHug',
    createdAt: plugin.createdAt || plugin.createAt,
    homepage: plugin.homepage,
    identifier: plugin.identifier,
    locale: plugin.locale || 'en-US',
    manifest: plugin.manifest,
    meta: {
      ...plugin.meta,
      category: plugin.meta.category || 'tools'
    },
    schemaVersion: 1
  }));
};

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    // Get locale from query params or use default
    const locale = req.query.locale as string || 'en-US';
    
    // Read the source plugins data
    const publicDir = path.join(process.cwd(), 'public');
    const pluginsData = JSON.parse(fs.readFileSync(path.join(publicDir, 'index.json'), 'utf8'));
    
    // Convert to Lobe Chat format
    const lobePlugins = convertToLobeFormat(pluginsData.plugins);
    
    // Generate tags list
    const tags = extractAllTags(lobePlugins);
    
    // Create the final response
    const response = {
      schemaVersion: 1,
      plugins: lobePlugins,
      tags
    };
    
    // Set appropriate headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    
    // Return the formatted data
    return res.status(200).json(response);
  } catch (error) {
    console.error('Error generating index:', error);
    return res.status(500).json({ error: 'Failed to generate index' });
  }
}; 