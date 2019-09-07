
// Dependencies
var express = require("express");

var app = express();
var PORT = 3000;

// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});