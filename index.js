const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const path = require("path");
const VIEWS_PATH = path.join(__dirname, "/views");
const fs = require("fs");

const json = fs.readFileSync(`${__dirname}/data/data.json`, `utf-8`);
const portfolioData = JSON.parse(json);

app.set("views", VIEWS_PATH);
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.locals.portfolioData = portfolioData;
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Portfolio site running on ${PORT}`);
});
