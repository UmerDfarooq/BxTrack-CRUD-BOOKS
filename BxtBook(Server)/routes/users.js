var express = require('express');
var router = express.Router();
var Book = require('../Models/Book')
// Create a new book
router.post('/api/books', (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    no_of_pages: req.body.no_of_pages,
    published_at: req.body.published_at
  });

  book.save()
    .then(book => res.json(book))
    .catch(error => res.status(400).json({ error }));
});



// Read all books
router.get('/api/books', (req, res) => {
  Book.find()
    .then(books => res.json(books))
    .catch(error => res.status(400).json({ error }));
});
router.get('/api/books/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(books => res.json(books))
    .catch(error => res.status(400).json({ error }));
});

// Update a book
router.put('/api/books/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    author: req.body.author,
    no_of_pages: req.body.no_of_pages,
    published_at: req.body.published_at
  }, { new: true })
    .then(book => res.json(book))
    .catch(error => res.status(400).json({ error }));
});

// Delete a book
router.delete('/api/books/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id)
    .then(book => res.json(book))
    .catch(error => res.status(400).json({ error }));
});



module.exports = router;
