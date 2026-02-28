"use strict";
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 8080;


const corsOptions = {
    origin: `http://localhost:${port}` 
};
app.use(cors(corsOptions));
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function getRandomImage() {
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${process.env.CLIENT_ID}`;
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        return returnedData.urls.regular;
    } catch (error) {
        console.error("Error fetching from Unsplash:", error);
        return null;
    }
}


app.get("/api/v1/getRandomImage", async (req, res) => {
    const imageUrl = await getRandomImage();
    if (!imageUrl) {
        return res.status(500).json({ status: 500, error: "Failed to fetch image" });
    }
    res.status(200).json({
        status: 200,
        data: imageUrl
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

console.log("CLIENT_ID:", process.env.CLIENT_ID);