"use strict";

const express = require("express");
const app = express();

app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log("Press Ctrl+C to end this process.");
});
