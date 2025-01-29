import axios from "axios";

const API_URL = "https://users-70538-default-rtdb.firebaseio.com/books";

// Fetch books from Firebase
export const fetchBooks = async (setBooks) => {
    try {
        const response = await axios.get(`${API_URL}.json`);
        const booksData = response.data || {};
        const booksArray = Object.keys(booksData)
            .map(key => ({ id: key, ...booksData[key] }))
            .filter(book => book.title && book.author && book.isbn && !book.deleted);
        setBooks(booksArray);
    } catch (error) {
        console.error("Error fetching books:", error.message);
    }
};

// Add a new book
export const addBook = async (formData) => {
    try {
        await axios.post(`${API_URL}.json`, formData);
    } catch (error) {
        console.error("Error adding book:", error.message);
    }
};

// Update an existing book
export const updateBook = async (id, formData) => {
    try {
        await axios.patch(`${API_URL}/${id}.json`, formData);
    } catch (error) {
        console.error("Error updating book:", error.message);
    }
};

// Soft delete a book (marks as deleted)
export const deleteBook = async (id) => {
    try {
        await axios.patch(`${API_URL}/${id}.json`, { deleted: true });
    } catch (error) {
        console.error("Error deleting book:", error.message);
    }
};
