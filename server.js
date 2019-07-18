// This file sets and starts the server
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up Express and Path
// =============================================================
var express = require("express");
var app = express();
var path = require("path");
console.log("line 10");
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
console.log("line16");
//Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Starts the server to begin listening
// =============================================================
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log("App listening");
  });
