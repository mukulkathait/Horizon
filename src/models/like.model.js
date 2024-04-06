import mongoose, { Schema } from "mongoose";

const likeSchema = Schema({});

export const Like = mongoose.model("Like", likeSchema);
