import express from "express";
import cors from "cors";
import fetch from "node-fetch"; // Make sure to install `node-fetch`

const app = express();
app.use(cors({
    origin: '*', // Allow all origins
    methods: 'GET,POST', // Allow specific methods
    allowedHeaders: 'Content-Type, Authorization' // Allow necessary headers
  }));

// Proxy for restaurant list
app.get("/api/restaurants/list", async (req, res) => {
  try {
    const swiggyURL =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    const response = await fetch(swiggyURL, {
      headers: { "Content-Type": "application/json","User-Agent": "Mozilla/5.0" },
    });

    if (!response.ok) throw new Error(`Swiggy API error: ${response.status}`);

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching restaurant list:", error);
    res.status(500).json({ error: "Failed to fetch data from Swiggy" });
  }
});

// Proxy for restaurant menu
app.get("/api/menu", async (req, res) => {
  try {
    const { restaurantId } = req.query;
    if (!restaurantId) {
      return res.status(400).json({ error: "Restaurant ID is required" });
    }

    const menuURL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${restaurantId}`;

    const response = await fetch(menuURL, {
      headers: { "Content-Type": "application/json","User-Agent": "Mozilla/5.0" },
    });

    if (!response.ok) throw new Error(`Swiggy API error: ${response.status}`);

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching menu data:", error);
    res.status(500).json({ error: "Failed to fetch menu from Swiggy" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
