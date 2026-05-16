import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
  filename: String,
  content: String,
  embedding: {
    type: [Number],
    index: "vectorSearch"
  }
});

export default mongoose.model("Document", documentSchema);
