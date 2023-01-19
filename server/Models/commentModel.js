import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    comment: {
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
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Comment", commentSchema);
