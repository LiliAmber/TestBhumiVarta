const express = require("express");
const app = express();
const PORT = 3000;
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  fs.readFile("./data/hospitals.json", "utf8", (err, hospitals) => {
    if (err) {
      res.send(err);
    } else {
      hospitals = JSON.parse(hospitals);
      res.render("Map", { data: hospitals });
    }
  });
});
app.listen(PORT, () => {
  console.log("this page running on port", PORT);
});
