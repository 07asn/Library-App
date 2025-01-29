import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Navbar() {
    const { user, logout } = useAuth();

    return (
        <nav className="bg-purple-700 text-white py-4 px-6 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">📚 Book Library</h1>
                <ul className="flex space-x-6">
                    <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                    <li><Link to="/catalog" className="hover:text-gray-300">Catalog</Link></li>
                    {user ? (
                        <>
                            <li><span className="text-yellow-300">👤 {user.username}</span></li>
                            <li><button onClick={logout} className="hover:text-gray-300">Logout</button></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/signup" className="hover:text-gray-300">Sign Up</Link></li>
                            <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
