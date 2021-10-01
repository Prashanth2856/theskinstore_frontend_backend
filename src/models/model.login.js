const mongoose = require("mongoose");

const loginSchema = mongoose.Schema(
  {
    Email: { type: String, required: true },
    Password: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Login = mongoose.model("login", loginSchema);

module.exports = Login;
