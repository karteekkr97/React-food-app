import { fetch } from 'undici'; // If you're using type module, make sure you use "import" syntax

export async function handler(event, context) {
  try {
    const restaurantUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const response = await fetch(restaurantUrl);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error fetching restaurant data:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch data from Swiggy" }),
    };
  }
}
