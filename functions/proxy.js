// Use ES module syntax for imports
import fetch from 'node-fetch';

export async function handler(event, context) {
  const apiUrl = 'https://api.swiggy.com/api/restaurants/list'; // Your live API endpoint

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data' }),
    };
  }
}
