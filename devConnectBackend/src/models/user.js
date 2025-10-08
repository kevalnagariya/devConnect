const mongoose = require("mongoose");

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
      trim: true
    },
    password: {
      type: String,
      required: true
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
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
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