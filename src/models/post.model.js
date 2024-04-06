import mongoose, { Schema } from "mongoose";

const postSchema = Schema({});

export const Post = mongoose.model("Post", postSchema);
