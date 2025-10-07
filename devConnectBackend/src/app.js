const express = require("express");

const app = express();

// app.use("/route", rH, [rH2, rH3], rH4, rH5);

app.use("/user",(req, res, next) => {
    console.log("handling the route user 1");
    // res.send("Response");
    next();
},(req, res, next ) => {
    console.log("handling the route user 2");
    // res.send("2nd Response");
    next();
},(req, res, next) => {
    console.log("handling the route user 4");
    // res.send("3nd Response");
    next();
},(req, res, next) => {
    console.log("handling the route user 4");
    // res.send("4nd Response");
    next();
},(req, res) => {
    console.log("handling the route user 5");
    res.send("5nd Response");
});


app.listen(7777, ()=> {
    console.log("Server is successfully listening on port 3000");
});