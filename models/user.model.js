const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
        password: {
          type: String,
          required: [true, 'Password is required'],
        },
        email: {
          type: String,
          required: [true, 'Email is required'],
          unique: true,
        },
        subscription: {
          type: String,
          enum: ["starter", "pro", "business"],
          default: "starter"
        },
        token: {
          type: String,
          default: null,
        },
      });


userSchema.methods.setPassword = function (password) {
  this.password = bCrypt.hashSync(
    password,
    bCrypt.genSaltSync(6)
  );
};

userSchema.methods.validPassword = function (password) {
  return bCrypt.compareSync(password, this.password);
};
const User = new mongoose.model("User", userSchema);

module.exports = User;