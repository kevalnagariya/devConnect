const express = require("express");

const app = express();

app.use("/", (err, req, res, next) =>{
    if (err){
        res.status(500).send("something went wrong");
    }
});




app.get("/getUserData", (req, res) =>{
    // try{

    throw new Error("asdasd");
    res.send("User Data sent");
    // }
    // catch(err){
        // res.status(500).send("something went wrong");
    // }

    
})


app.get("/admin/getAllData", (req, res) =>{
    res.send("All data send");
})

app.get("/admin/deleteUser", (req, res) =>{
    res.send("Deleted a user");
})

app.listen(7777, ()=> {
    console.log("Server is successfully listening on port 3000");
});