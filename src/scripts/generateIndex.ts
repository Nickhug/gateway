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

// Generate index files for Lobe Chat compatibility
const generateIndexFiles = () => {
  try {
    // Read source data
    const publicDir = path.join(process.cwd(), 'public');
    const pluginsData = JSON.parse(fs.readFileSync(path.join(publicDir, 'index.json'), 'utf8'));
    
    // Convert to Lobe Chat format
    const lobePlugins = convertToLobeFormat(pluginsData.plugins);
    
    // Generate tags list
    const tags = extractAllTags(lobePlugins);
    
    // Create the response object
    const response = {
      schemaVersion: 1,
      plugins: lobePlugins,
      tags
    };
    
    // Write the main index.json file
    fs.writeFileSync(
      path.join(publicDir, 'index.json'), 
      JSON.stringify(response, null, 2),
      'utf8'
    );
    
    // Write localized versions
    const locales = ['en-US', 'zh-CN', 'zh-TW'];
    locales.forEach(locale => {
      fs.writeFileSync(
        path.join(publicDir, `index.${locale}.json`),
        JSON.stringify(response, null, 2),
        'utf8'
      );
    });
    
    console.log('Index files generated successfully');
  } catch (error) {
    console.error('Error generating index files:', error);
  }
};

// Run the generator
generateIndexFiles(); 