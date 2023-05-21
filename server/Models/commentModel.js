import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    lastName: {
      type: String,
    },
    comment: {
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
    lid: {
      type: String,
    },
    postName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Comment", commentSchema);
