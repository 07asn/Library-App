import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Signup from "./components/pages/SignUp";
import Navbar from "./components/common/Header";
import Footer from "./components/common/Footer";
import BookCatalog from "./components/books/BookCatalog";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/catalog" element={<BookCatalog />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
