import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    UserName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    vote: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (this.age > 18) {
    this.vote = true;
  }
  next();
});

export const DBUser = mongoose.model("DBUser", userSchema);
