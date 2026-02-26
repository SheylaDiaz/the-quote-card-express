"use strict";

const express = require("express");
const app = express( );

const port = 8080;

app.use(express.static("./public"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/v1/getRandomImage", (request, response) => {
    response.status(200).json({
        status: 200,
        data: process.env.CLIENT_ID
    });
});

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
});
require("dotenv").config();
const cors = require("cors");

app.use(cors());