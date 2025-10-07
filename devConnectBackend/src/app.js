const express = require("express");

const app = express();


app.get("/ab?c",(req, res) => {
    res.send({firstName: "Keval", lastName:"nagariya"});
})


app.listen(7777, ()=> {
    console.log("Server is successfully listening on port 3000");
});