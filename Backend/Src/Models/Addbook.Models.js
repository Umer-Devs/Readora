import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
    lowercase: true,
  },
  isbn: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  publicationYear: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
    lowercase: true,
  },
  description: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
    lowercase: true,
  },
  ratings: {
    type: String,
    required: true,
  },
  available: {
    type: String,
    required: true,
    lowercase: true,
  },
  frontCover: {
    type: String,
    required: true,
  },
  backCover: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export const Book = mongoose.model("Book", bookSchema);
