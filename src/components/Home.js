/* -------------------CLASS COMPONANT-------------------*/
// import React, { Component } from "react";
// import Header from "./Header";
// import Main from "./Main";
// import Footer from "./Footer";

// class Home extends Component {
//     render() {
//         const { books } = this.props;

//         return (
//             <div>
//                 <Header />
//                 <Main books={books} />
//                 <Footer />
//             </div>
//         );
//     }
// }

// export default Home;
/* -------------------CLASS COMPONANT-------------------*/




/* ------------------FUNCTION COMPONANT-----------------*/
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Home = (props) => {
    return (
        <div>
            <Header />
            <Main books={props.books} />
            <Footer />
        </div>
    );
};

export default Home;
/* ------------------FUNCTION COMPONANT-----------------*/