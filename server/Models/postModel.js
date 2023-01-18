import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    content2: {
      type: String,
    },
    createdAt: {
      type: String,
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
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Post", postSchema);
