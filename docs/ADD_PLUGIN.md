# Adding Plugins to Your Gateway

This guide explains how to add new plugins to your custom gateway for Lobe Chat.

## Plugin Structure

Each plugin in Lobe Chat requires the following components:

1. **Plugin metadata** in the `index.json` file
2. **Plugin manifest** that describes the plugin's functionality

## Adding a New Plugin

### Step 1: Create the Plugin Manifest

Create a new manifest JSON file in the `public/plugins` directory.

```json
// public/plugins/your-plugin-manifest.json
{
  "api": {
    "url": "https://your-plugin-api-endpoint.com/api",
    "authorization": {
      "type": "none"
    }
  },
  "author": "Your Name",
  "createAt": "2023-08-19",
  "homepage": "https://your-homepage.com",
  "identifier": "your-plugin-id",
  "meta": {
    "avatar": "🧩",
    "description": "Description of your plugin",
    "tags": ["tag1", "tag2"],
    "title": "Your Plugin Name"
  },
  "manifest_version": "v1",
  "type": "default"
}
```

### Step 2: Update the index.json File

Edit the `public/index.json` file to include your new plugin. Add a new entry to the `plugins` array:

```json
{
  "plugins": [
    // ... existing plugins
    {
      "createAt": "2023-08-19",
      "homepage": "https://your-homepage.com",
      "identifier": "your-plugin-id",
      "manifest": "https://your-gateway-url.com/plugins/your-plugin-manifest.json",
      "meta": {
        "avatar": "🧩",
        "description": "Description of your plugin",
        "tags": ["tag1", "tag2"],
        "title": "Your Plugin Name"
      },
      "name": "your-plugin-id",
      "schemaVersion": "v1"
    }
  ],
  "schemaVersion": "v1"
}
```

### Step 3: Generate Index Files

After adding your plugin, run the following command to generate the properly formatted index files for Lobe Chat:

```bash
npm run generate-index
```

This will:
1. Convert your plugin data to the format expected by Lobe Chat
2. Generate the main index.json file
3. Create localized versions for different languages (en-US, zh-CN, etc.)

### Step 4: Deploy Your Gateway

Deploy your updated gateway to Vercel:

```bash
vercel --prod
```

## Creating a Plugin API

If your plugin requires a backend API, you should:

1. Create a new API endpoint in the `/api/v1/your-plugin-id` directory
2. Implement your plugin's functionality
3. Update your plugin manifest to point to this API endpoint

### Example API Endpoint

```typescript
// api/v1/your-plugin-id/index.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    // Your plugin logic here
    const result = {
      // Your plugin response
    };
    
    return res.status(200).json(result);
  } catch (error) {
    console.error('Error in your-plugin-id API:', error);
    return res.status(500).json({ error: 'An error occurred' });
  }
};
```

## Testing Your Plugin

After adding your plugin:

1. Make sure the gateway is deployed
2. Configure Lobe Chat to use your gateway by setting `PLUGINS_INDEX_URL` to your gateway URL
3. Check if your plugin appears in the Lobe Chat discover page
4. Test installing and using your plugin

## Troubleshooting

- **Plugin not appearing**: Check your index.json format and make sure it matches the expected Lobe Chat format
- **API errors**: Check your API endpoint implementation and logs in Vercel
- **CORS issues**: Make sure your gateway has the proper CORS headers 