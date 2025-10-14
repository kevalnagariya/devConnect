const express = require("express");
const connectDB = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config({});
const cors = require("cors");

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true 
}));
app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

connectDB().then(() => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on ` + process.env.PORT);
    });
  } catch (error) {
    console.log(error);
  }
});
