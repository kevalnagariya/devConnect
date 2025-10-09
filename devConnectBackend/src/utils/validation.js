const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Name is not valid");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Email is not valid");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Please enter a strong password");
  }
};

const validateEditProfileData = (req) => {
  const allowedEditFields = [
    "firstName",
    "lastName",
    "emailId",
    "photoUrl",
    "gender",
    "age",
    "about",
    "skills",
  ];

  const isEditAllowed = Object.keys(req.body).every((field) =>
    allowedEditFields.includes(field)
  );

  return isEditAllowed;
};

const validateForgotPasswordData = (req) => {
  const { emailId, newPassword } = req.body;

  if (!emailId || !newPassword) {
    throw new Error("Email and new password are required");
  }

  if (!validator.isEmail(emailId)) {
    throw new Error("Invalid email address");
  }

  if (!validator.isStrongPassword(newPassword)) {
    throw new Error(
      "Password must be strong (min 8 chars, include upper, lower, number & symbol)"
    );
  }

  return true;
};

module.exports = {
  validateSignUpData,
  validateEditProfileData,
  validateForgotPasswordData
};
