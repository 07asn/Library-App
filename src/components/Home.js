import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Home = ({ books }) => {
    return (
        <div>
            <Header />
            <Main books={books} />
            <Footer />
        </div>
    );
};

export default Home;
