import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  joinedOn: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.model("users", userSchema);