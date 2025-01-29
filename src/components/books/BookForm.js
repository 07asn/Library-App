import React from "react";

function BookForm({ formData, setFormData, handleSubmit, editingBook }) {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded shadow">
            <input 
                type="text" 
                name="title" 
                value={formData.title} 
                onChange={handleChange} 
                placeholder="Title" 
                className="border p-2 w-full mb-2" 
                required 
            />
            <input 
                type="text" 
                name="author" 
                value={formData.author} 
                onChange={handleChange} 
                placeholder="Author" 
                className="border p-2 w-full mb-2" 
                required 
            />
            <input 
                type="text" 
                name="isbn" 
                value={formData.isbn} 
                onChange={handleChange} 
                placeholder="ISBN" 
                className="border p-2 w-full mb-2" 
                required 
            />
            <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                {editingBook ? "Update Book" : "Add Book"}
            </button>
        </form>
    );
}

export default BookForm;
