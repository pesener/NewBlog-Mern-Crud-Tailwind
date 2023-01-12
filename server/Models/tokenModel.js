import mongoose from "mongoose";

const tokenSchema = mongoose.Schema({
  userId: {
    type: String,
  },
  refreshToken: {
    type: String,
  },
});

const tokenModel = mongoose.model("Token", tokenSchema);
export default tokenModel;
