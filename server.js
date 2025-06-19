const express = require("express");
const fetch = require("node-fetch");
const fs = require("fs");
require("dotenv").config();

const app = express();
const port = 8080;

app.use(express.static("./public"));

app.get("/quote", (req, res) => {
  fs.readFile("quotes.json", "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Could not load quotes" });

    const quotes = JSON.parse(data);
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    res.json({ quote: random });
  });
});

app.get("/background", async (req, res) => {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/random?query=ocean&orientation=landscape&client_id=${process.env.UNSPLASH_KEY}`);
    const data = await response.json();

    res.json({
      imageUrl: (data.urls && data.urls.full) || "",
      author: (data.user && data.user.name) || "Unknown",
      authorUrl: (data.user && data.user.links && data.user.links.html) || "#"
    });
  } catch (err) {
    res.status(500).json({ error: "Background fetch failed" });
  }
});

app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});

