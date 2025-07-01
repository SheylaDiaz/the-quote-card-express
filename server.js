"use strict";

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log("Press Ctrl+C to end this process.");
});
