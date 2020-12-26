const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

//connect to the database
mongoose.connect("mongodb://localhost:27017/linkManager", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', function () {
    console.log("Error in connection");
});
db.on('open', function () {
    console.log("Connected to database");
})
app.post("/signup", function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var mobnumber = req.body.mobnumber;
    var department = req.body.dept;

    var data = {
        "name": name,
        "email": email,
        "password": password,
        "mobnumber": mobnumber,
        "department": department
    }
    db.collection('teachers').insertOne(data, function (err, collection) {
        if (err) {
            throw err;
        }
        console.log("Record inserted successfully!");
    });

    return res.redirect('signup_success.html');

});


app.listen(3000, function () {
    console.log("Server is runnning on port 3000");
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.get("/signup.html", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});
app.get("/signin.html", function (req, res) {
    res.sendFile(__dirname + "/signin.html");
});

app.post("/", function (req, res) {
    console.log(req.body.radio)
    if (req.body.radio === "Student") {
        res.sendFile(__dirname+"/public/student.html")
    }
    else if (req.body.radio == "Teacher") {
        res.sendFile(__dirname+"/public/signin.html")
    }
});
