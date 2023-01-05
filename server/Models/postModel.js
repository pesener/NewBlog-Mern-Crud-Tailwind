import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    email: {
      type: String,
    },
    isPublish: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Post", postSchema);
