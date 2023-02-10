
const mongoose = require('mongoose');

// Define the book schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    
  },
  author: {
    type: String,
   
  },
  no_of_pages: {
    type: Number,
    
  },
  published_at: {
    type: Date,
    
  }
});

// Create the Book model
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
