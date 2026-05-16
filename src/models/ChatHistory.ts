import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  question: String,
  answer: String,
  sources: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("ChatHistory", chatSchema);
