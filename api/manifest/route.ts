import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

// Get the absolute path to the public directory
const publicDir = path.join(process.cwd(), 'public');

export async function GET(req: NextRequest) {
  try {
    // Get the plugin parameter from the URL
    const { searchParams } = new URL(req.url);
    const plugin = searchParams.get('plugin');

    if (!plugin) {
      // If no plugin parameter, return the index.json
      const indexPath = path.join(publicDir, 'index.json');
      const indexData = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
      return NextResponse.json(indexData);
    }

    // Path to the plugin manifest
    const manifestPath = path.join(publicDir, 'plugins', `${plugin}-manifest.json`);
    
    // Check if the manifest file exists
    if (!fs.existsSync(manifestPath)) {
      return NextResponse.json({ error: 'Plugin not found' }, { status: 404 });
    }

    // Read and parse the manifest file
    const manifestData = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

    return NextResponse.json(manifestData);
  } catch (error) {
    console.error('Error serving manifest:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Origin': '*',
    },
    status: 200,
  });
}
