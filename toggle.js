var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.get to connect to other html pages
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/make-reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/view-tables", function (req, res) {
    res.sendFile(path.join(__dirname, "waitlist.html"));
});

// app.get to connect to other API (Need to update)
app.get("/view-tables", function (req, res) {
    res.sendFile(path.join(__dirname, "waitlist.html"));

});app.get("/view-tables", function (req, res) {
    res.sendFile(path.join(__dirname, "waitlist.html"));
});