const express = require('express');
const router = express.Router();
const Book = require('../models/Book'); // Adjust the path as needed

// Endpoint to handle renting a book
router.post('/addrental', async (req, res) => {
    try {
        const { _id } = req.body; // Assuming book ID is sent in the request body

        // Find the book and update its status
        const updatedBook = await Book.findByIdAndUpdate(
            _id,
            { $set: { status: 'unavailable' } },
            { new: true } // Return the updated document
        );
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;