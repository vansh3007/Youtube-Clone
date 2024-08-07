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
  points: {
    type: Number,
    default:0
  }
});
export default mongoose.model("users", userSchema);