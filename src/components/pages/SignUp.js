import React, { useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const API_URL = "https://users-70538-default-rtdb.firebaseio.com/users.json";

function Signup() {
    const { user, login, logout } = useAuth();
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(API_URL);
            const users = response.data || {};
            let userExists = Object.values(users).some(user => user.email === formData.email);
            if (userExists) {
                alert("User already exists. Please log in.");
                return;
            }
            await axios.post(API_URL, formData);
            login(formData);
        } catch (error) {
            console.error("Error signing up:", error.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            {user ? (
                <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
                    <h2 className="text-2xl font-bold mb-4">Welcome, {user.username}!</h2>
                    <button onClick={logout} className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
                        Logout
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-96">
                    <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700">Username</label>
                        <input type="text" name="username" value={formData.username} onChange={handleChange} className="w-full p-2 border rounded" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded" required />
                    </div>
                    <button type="submit" className="w-full bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800">
                        Sign Up
                    </button>
                </form>
            )}
        </div>
    );
}

export default Signup;