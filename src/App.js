import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';

function App() {
  const [state] = useState({
    books: [
      {
        id: 1,
        title: "مقدمة ابن خلدون",
        author: "ابن خلدون",
        isbn: "1289499030",
      },
      {
        id: 2,
        title: "الحاوي في الطب",
        author: "ابو بكر الرازي",
        isbn: "893847239479",
      },
      {
        id: 3,
        title: "الشمائل المحمدية",
        author: "الترمذي",
        isbn: "1249394823",
      },
      {
        id: 4,
        title: "الطب المخبري",
        author: "ابن سينا",
        isbn: "9823749834",
      },
      {
        id: 5,
        title: "الإحياء علوم الدين",
        author: "أبو حامد الغزالي",
        isbn: "3948572038",
      },
      {
        id: 6,
        title: "البيان والتبيين",
        author: "الجاحظ",
        isbn: "1948395732",
      },
      {
        id: 7,
        title: "الفهرست",
        author: "ابن النديم",
        isbn: "5647382910",
      },
      {
        id: 8,
        title: "العقد الفريد",
        author: "ابن عبد ربه",
        isbn: "8273645928",
      },
      {
        id: 9,
        title: "رسائل إخوان الصفا",
        author: "إخوان الصفا",
        isbn: "9182736450",
      },
    ],
  });

  return (
    <div className="App">
      <Home books={state.books} />
    </div>
  );
}

export default App;
