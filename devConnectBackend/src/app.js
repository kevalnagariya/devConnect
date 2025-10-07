const express = require("express");

const app = express();

//Order mattter
// app.use("/user",(req, res) => {
//     res.send("hahahahaahah")
// })

//This will only handle get call from the /user
app.get("/user",(req, res) => {
    res.send({firstName: "Keval", lastName:"nagariya"})
})

app.post("/user",(req, res) => {
    //saving data to db
    res.send("Data successfully saved to the database")
})

app.delete("/user", (req, res) => {
    res.send("Deleted successfully")
})

// this will match all the http method api calls to /test
app.use("/test",(req, res) => {
    res.send("Hello from the server")
})

// this will match all the http method api calls to /hello
app.use("/hello",(req, res) => {
    res.send("Hello hello from the server")
})

// this will match all the http method api calls to /
// app.use("/",(req, res) => {
//     res.send("Hello from Keval")
// })

app.listen(7777, ()=> {
    console.log("Server is successfully listening on port 3000");
});