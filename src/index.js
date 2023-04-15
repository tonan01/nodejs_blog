const express = require("express");
const morgan = require("morgan");
// import { handlebars } from "express-handlebars";
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

//HTTP loger
app.use(morgan("combined"));

//Templates engine
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
