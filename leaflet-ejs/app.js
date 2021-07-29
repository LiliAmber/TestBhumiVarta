const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.render("Map");
});
app.listen(PORT, () => {
  console.log("this page running on port", PORT);
});
