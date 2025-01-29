// Home.js
import React from "react";
import BookCatalog from "../books/BookCatalog";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Home = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {user ? (
                <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
                    <h2 className="text-2xl font-bold mb-4">Welcome, {user.username}!</h2>
                    <button
                        onClick={logout}
                        className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
                    <h2 className="text-2xl font-bold mb-4">Please Sign Up or Log In</h2>
                    <button
                        onClick={() => navigate("/signup")}
                        className="w-full bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800"
                    >
                        Go to Sign Up
                    </button>
                </div>
            )}
            {user && <BookCatalog />}
        </div>
    );
};

export default Home;
