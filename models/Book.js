const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    Author: String,
    BookName: String,
});

module.exports = mongoose.model('Book', bookSchema);
