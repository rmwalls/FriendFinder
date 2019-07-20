// This file sets and starts the server

// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var PORT = process.env.PORT || 3000;

// Sets up Express and Path
// =============================================================
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Starts the server to begin listening
// =============================================================

app.listen(PORT, function() {
    console.log("App listening");
  });