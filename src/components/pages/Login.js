import React, { useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const API_URL = "https://users-70538-default-rtdb.firebaseio.com/users.json";

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(API_URL);
            const users = response.data || {};

            // Find user by email and password
            const user = Object.values(users).find(
                (user) => user.email === formData.email && user.password === formData.password
            );

            if (user) {
                login(user);
                navigate("/"); // Redirect to Home after login
            } else {
                alert("Invalid email or password");
            }
        } catch (error) {
            console.error("Error logging in:", error.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800">
                    Log In
                </button>
                <p className="mt-4 text-center">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a>
                </p>
            </form>
        </div>
    );
}

export default Login;
