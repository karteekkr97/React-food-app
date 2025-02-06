// functions/proxy.js

exports.handler = async function(event, context) {
    // Dynamically import node-fetch to avoid the ESM error
    const fetch = (await import('node-fetch')).default;
  
    const apiUrl = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'; // Your live API endpoint
  
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
  };
  