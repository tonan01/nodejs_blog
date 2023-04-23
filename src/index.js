const path = require("path");
const express = require("express");
const morgan = require("morgan");
const methodOverride = require('method-override')
const handlebars = require("express-handlebars").engine;
const app = express();
const port = 3000;

//Import /
const route = require("./routes");

//DB
const db = require("./config/db");
db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTTP log
app.use(morgan("combined"));
app.use(methodOverride('_method'))
//Templates engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
