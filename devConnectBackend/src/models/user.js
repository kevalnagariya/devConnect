const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true],
      minLength: 4,
      maxLength: 50,
    },
    lastName: {
      type: String,
      
    },
    emailId: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
      validate(value){
        if(!validator.isEmail(value)){
            throw new Error("Invalid Email:" +value)
        }
      }
    },
    password: {
      type: String,
      required: true,
      validate(value){
        if(!validator.isStrongPassword(value)){
            throw new Error("Enter a strong password:" +value)
        }
      }
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "other"].includes(value)) {
          throw new Error("Gender given is invalid: " + value);
        }
      },
    },
    photoUrl: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        validate(value){
        if(!validator.isURL(value)){
            throw new Error("Invalid Photo Url:" +value)
        }
      }
    },
    about: {
        type: String,
        default: "Hello I am using devConnect"
    },
    skills: {
      type: [String],
    },
  },{ timestamps: true }
);


module.exports = mongoose.model("User", userSchema);