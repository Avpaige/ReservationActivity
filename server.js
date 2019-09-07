var express = require("express");
var $ = require('jQuery')
var path = require("path");
var app = express();
var PORT = 3000;

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
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
app.get("/api/tables", function (req, res) {
    res.JSON(reservations);
}); 
app.get("/api/waitlist", function (req, res) {
    res.JSON(waitList);
});


var reservations = []
var waitList = []

$("#reserve").on("click", function (event) {
    // alert("the button clicked")
    event.preventDefault();
    function validateForm() {
        var allFieldsValid = true;
        $(".form-control").each(function () {
            if (!$(this).val()) {
                allFieldsValid = false;
            }
        })
        return allFieldsValid;
    }
    if (validateForm()) {
        var newReservation = {
            name: $("#name").val().trim(),
            number: $("#phonenumber").val().trim(),
            email: $("#email").val().trim(),

        };
        console.log(newReservation)
        if (reservations.length < 5) {
            app.post("/api/make-reservation", function (req, res) {
                var newReservation = req.body;
                console.log(newReservation);
                reservations.push(newReservation);
                res.json(newReservation);
                alert("Congratulations your reservation has been saved!")
            })
        } else if (reservations.length = 5) {
            app.post("/api/make-reservation", function (req, res) {
                var newReservation = req.body; 
                console.log(newReservation);
                waitList.push(newReservation);
                res.json(newReservation);
                alert("You've been added to the waitlist and will be notified when a reservation opens up!")
            })
        }
    } else {
        alert("You must fill out the form entirely to make a reservation.");
    }
})