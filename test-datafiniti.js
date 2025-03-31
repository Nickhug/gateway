// Test script for Datafiniti plugin
const fetch = require('node-fetch');

// Replace with your actual deployment URL
const BASE_URL = 'http://localhost:3000';

async function testDatafinitiPlugin() {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/datafiniti`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        arguments: JSON.stringify({
          query: 'categories:hotels AND country:US',
          num_records: 5
        }),
        name: 'searchBusinessData'
      })
    });

    const data = await response.json();
    console.log('Datafiniti API Response:');
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error testing Datafiniti plugin:', error);
  }
}

testDatafinitiPlugin(); 