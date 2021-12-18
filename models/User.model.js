const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      String,
      required: [true, "Debes colocar username"]
    },
    email: {
      type: String,
      required: true,
    },
    profile_pic: {
      type: String,
      default: "https://avatars.githubusercontent.com/u/29002976?v=4"
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
