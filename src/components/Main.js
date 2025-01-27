/* -------------------CLASS COMPONANT-------------------*/
// import React, { Component } from 'react';

// class Main extends Component {
//   render() {
//     const { books } = this.props;

//     return (
//       <main>
//         {books.map((book) => (
//           <div className="card" key={book.id}>
//             <h3>{book.title}</h3>
//             <p>المؤلف: {book.author}</p>
//             <p>رقم الكتاب: {book.isbn}</p>
//           </div>
//         ))}
//       </main>
//     );
//   }
// }

// export default Main;
/* -------------------CLASS COMPONANT-------------------*/



/* ------------------FUNCTION COMPONANT-----------------*/
import React from 'react';

const Main = ({ books }) => {
  return (
    <main>
      {books.map((book) => (
        <div className="card" key={book.id}>
          <h3>{book.title}</h3>
          <p>المؤلف: {book.author}</p>
          <p>رقم الكتاب: {book.isbn}</p>
        </div>
      ))}
    </main>
  );
};

export default Main;
/* ------------------FUNCTION COMPONANT-----------------*/