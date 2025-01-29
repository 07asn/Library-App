import React from "react";

function BookList({ books, handleEdit, handleDelete }) {
    return (
        <div className="grid grid-cols-3 gap-4">
            {books.map((book) => (
                <div key={book.id} className="bg-white p-4 rounded shadow relative">
                    <h3 className="text-lg font-semibold">{book.title}</h3>
                    <p className="text-gray-700">✍️ Author: {book.author}</p>
                    <p className="text-gray-500">📖 ISBN: {book.isbn}</p>
                    <div className="mt-2 flex justify-between">
                        <button 
                            onClick={() => handleEdit(book)} 
                            className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700"
                        >
                            ✏️ Edit
                        </button>
                        <button 
                            onClick={() => handleDelete(book.id)} 
                            className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700"
                        >
                            🗑️ Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BookList;
