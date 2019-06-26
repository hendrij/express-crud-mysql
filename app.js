const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 3300;
const multer = require("multer");
const upload = multer();

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static("public"));

// parse application/json
app.use(bodyParser.json());

// allow cors
app.use(cors());

// define a simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to express-crud."
  });
});

// Routes
require("./app/routes/note.routes.js")(app);

// listen for requests
app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
