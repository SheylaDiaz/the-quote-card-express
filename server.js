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



app.use("/api/v1/getRandomImage", (request, response) => {
    response.status(200).json({
        status: 200,
        data: process.env.CLIENT_ID
    });
});
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
