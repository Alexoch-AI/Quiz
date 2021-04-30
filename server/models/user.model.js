const { Schema, model, pluralize } = require("mongoose");
pluralize(null);

const usersSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model("User", usersSchema);
module.exports = User;
