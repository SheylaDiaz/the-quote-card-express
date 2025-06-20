const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 8080;


app.use(express.static("public"));

app.get("/quote", (req, res) => {
  const quote = {
    text: "There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.",
    author: "Bruce Lee",
  };
  res.json(quote);
});




app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
