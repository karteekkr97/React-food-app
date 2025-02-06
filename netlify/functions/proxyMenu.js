import { fetch } from 'undici';// If you're using type module, make sure you use "import" syntax

export async function handler(event, context) {
  const { restaurantId } = event.queryStringParameters;
  if (!restaurantId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Restaurant ID is required" }),
    };
  }

  try {
    const menuUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${restaurantId}`;
    const response = await fetch(menuUrl);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error fetching menu data:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch menu from Swiggy" }),
    };
  }
}
