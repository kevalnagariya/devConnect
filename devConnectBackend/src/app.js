const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error saving the user: " + err.message);
  }
});


// Get user by email or id
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  const userId = req.body.userId;

  try {
    console.log(userId); // Make sure userId contains the MongoDB _id
    const user = await User.findById(userId); // Use findById
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
  } catch (err) {
    console.error(err);
    res.status(400).send("Something went wrong...");
  }

  //   try{
  //     console.log(userEmail);
  //     const users =  await User.findOne({emailId: userEmail});
  //     if (!users){
  //         res.status(404).send("User not found");
  //     }
  //     else{
  //          res.send(users);
  //     }
  //   }catch (err) {
  //     res.status(400).send("Something went wrong...");
  //   }

  //   try {
  //     const users = await User.find({
  //       emailId: userEmail,
  //     });
  //     if (users.length === 0) {
  //       res.status(404).send("users not found");
  //     } else {
  //       res.send(users);
  //     }
  //   } catch (err) {
  //     res.status(400).send("Something went wrong...");
  //   }
});


// delete user by id
app.delete("/user", async (req, res) => {
 
  const userId = req.body.userId;

  try {
    const user = await User.findByIdAndDelete({_id: userId});
    // const user = await User.findByIdAndDelete(userId); 
   
      res.send("User deleted successfully");
   
  } catch (err) {
    console.error(err);
    res.status(400).send("Something went wrong...");
  }

});

app.patch("/user", async (req, res) => {
    const userId = req.body.userId;
    const data = req.body;
    try{
        const user = await User.findByIdAndUpdate({_id: userId}, data, {
            returnDocument:"after",
            runValidators: true,
        });
        res.send("User updated successfully");
    }catch(err){
        res.status(400).send("Update failed: " +err.message);
    }
} )


// Feed api - get /feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong...");
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established... ");
    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected...");
  });
