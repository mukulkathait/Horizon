import mongoose, { Schema } from "mongoose";

const commentSchema = Schema({});

export const Comment = mongoose.model("Comment", commentSchema);
