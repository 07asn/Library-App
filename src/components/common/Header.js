import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-purple-700 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">📚 Book Library</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/About" className="hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link to="/Contact" className="hover:text-gray-300">Contact</Link>
          </li>
          <li>
            <Link to="/SignUp" className="hover:text-gray-300">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;