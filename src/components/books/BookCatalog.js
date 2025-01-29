// BookCatalog.js
import React, { useEffect, useState } from "react";
import {
    fetchBooks,
    addBook,
    updateBook,
    deleteBook,
} from "../../services/bookService";
import BookForm from "./BookForm";
import BookList from "./BookCard";
import useAuth from "../hooks/useAuth";

function BookCatalog() {
    const { user } = useAuth();
    const [books, setBooks] = useState([]);
    const [formData, setFormData] = useState({ title: "", author: "", isbn: "" });
    const [editingBook, setEditingBook] = useState(null);

    useEffect(() => {
        fetchBooks(setBooks);
    }, []);

    // Add or Update Book
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.title || !formData.author || !formData.isbn) {
            alert("Please fill in all fields before submitting.");
            return;
        }
        if (editingBook) {
            await updateBook(editingBook.id, formData);
            setEditingBook(null);
        } else {
            await addBook(formData);
        }
        fetchBooks(setBooks);
        setFormData({ title: "", author: "", isbn: "" });
    };

    // Handle Edit Button
    const handleEdit = (book) => {
        setEditingBook(book);
        setFormData({ title: book.title, author: book.author, isbn: book.isbn });
    };

    // Soft Delete Book
    const handleDelete = async (id) => {
        await deleteBook(id);
        fetchBooks(setBooks);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">📚 Book Catalog</h2>
            {user && (
                <>
                    <BookForm
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                        editingBook={editingBook}
                    />
                    <BookList
                        books={books}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
        </div>
    );
}

export default BookCatalog;