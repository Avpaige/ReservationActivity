
// Dependencies
var express = require("express");

var app = express();
var PORT = 3000;
var path = require('path');

// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});