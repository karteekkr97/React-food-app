import express from "express";
import cors from "cors";
import { fetch } from 'undici';

const app = express();

const LAT = "21.99740"; // Keep hardcoded for local
const LNG = "79.00110"; 

app.use(cors({ origin: "*", methods: "GET,POST", allowedHeaders: "Content-Type, Authorization" }));

// ✅ Proxy for restaurant list
app.get("/api/restaurants/list", async (req, res) => {
  try {
    const swiggyURL = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${LAT}&lng=${LNG}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

    const response = await fetch(swiggyURL, {
      headers: { "Content-Type": "application/json", "User-Agent": "Mozilla/5.0" },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: `Swiggy API error: ${response.status}` });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching restaurant list:", error.message);
    res.status(500).json({ error: "Failed to fetch data from Swiggy" });
  }
});

// ✅ Proxy for restaurant menu
app.get("/api/menu", async (req, res) => {
  try {
    const { restaurantId } = req.query;
    if (!restaurantId) {
      return res.status(400).json({ error: "Restaurant ID is required" });
    }

    const menuURL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${LAT}&lng=${LNG}&restaurantId=${restaurantId}`;

    const response = await fetch(menuURL, {
      headers: { "Content-Type": "application/json", "User-Agent": "Mozilla/5.0" },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: `Swiggy API error: ${response.status}` });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching menu data:", error.message);
    res.status(500).json({ error: "Failed to fetch menu from Swiggy" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Proxy running on port ${PORT}`));
