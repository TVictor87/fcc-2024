// src/App.tsx

import React, { useEffect, useState } from "react";
import { apiGetBookStores, BookStoreData } from "./api/apiGetBookStores";
import BookStore from "./components/BookStore";
import "./App.css";

const App: React.FC = () => {
  const [bookstores, setBookstores] = useState<BookStoreData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiGetBookStores();
      setBookstores(data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {bookstores.map((store, index) => (
        <BookStore
          key={index}
          logo={store.logo}
          name={store.name}
          books={store.books}
          date={store.date}
          website={store.website}
          rating={store.rating}
          countryCode={store.countryCode}
        />
      ))}
    </div>
  );
};

export default App;

// import React from 'react';
// import Rating from './components/Rating';

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const store1 = {
//     imageUrl: 'https://example.com/bookstore1.jpg',
//     name: 'Bookstore 1',
//     rating: 4,
//     bestSellingBooks: [
//       { name: 'Book A1', author: 'Author A1', copiesSold: 100 },
//       { name: 'Book A2', author: 'Author A2', copiesSold: 80 },
//     ],
//     establishmentDate: '2023-05-15T00:00:00Z',
//     website: 'https://example.com/bookstore1',
//     countryCode: 'US'
//   };

//   const store2 = {
//     imageUrl: 'https://example.com/bookstore2.jpg',
//     name: 'Bookstore 2',
//     rating: 3.5,
//     bestSellingBooks: [
//       { name: 'Book B1', author: 'Author B1', copiesSold: 120 },
//       { name: 'Book B2', author: 'Author B2', copiesSold: 90 },
//     ],
//     establishmentDate: '2022-08-20T00:00:00Z',
//     website: 'https://example.com/bookstore2',
//     countryCode: 'UK'
//   };

//   const store3 = {
//     imageUrl: 'https://example.com/bookstore3.jpg',
//     name: 'Bookstore 3',
//     rating: 5,
//     bestSellingBooks: [
//       { name: 'Book C1', author: 'Author C1', copiesSold: 150 },
//       { name: 'Book C2', author: 'Author C2', copiesSold: 110 },
//     ],
//     establishmentDate: '2024-01-10T00:00:00Z',
//     website: 'https://example.com/bookstore3',
//     countryCode: 'CA'
//   };

//   var bookStores = [store1, store2, store3]

//   return (
//     <div className="App">
//       <div><Rating></Rating></div>

//       <div className="bookstores-list">
//       {bookStores.map((store, index) => (
//         <div key={index} className="bookstore">
//           <div className="left-side">
//             <img src={store.imageUrl} alt="Bookstore" />
//           </div>
//           <div className="right-side-top">
//             <div className="bookstore-name">{store.name}</div>
//             <div className="rating">
//               {Array.from({ length: store.rating }, (_, i) => (
//                 <span key={i} className="star">★</span>
//               ))}
//             </div>
//           </div>
//           <div className="right-side-middle">
//             <h3>Best selling books</h3>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Book name</th>
//                   <th>Author</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {store.bestSellingBooks.length > 0 ? (
//                   store.bestSellingBooks.slice(0, 2).map((book, index) => (
//                     <tr key={index}>
//                       <td>{book.name}</td>
//                       <td>{book.author}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan={2}>No data available</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//           <div className="bottom-left">
//             Establishment date: {new Date(store.establishmentDate).toLocaleDateString('en-GB')}
//             <br />
//             Website: <a href={store.website}>{store.website}</a>
//           </div>
//           <div className="bottom-right">
//             <img src={`https://restcountries.eu/rest/v2/alpha/${store.countryCode.toLowerCase()}?fields=flag`} alt="Country flag" />
//           </div>
//         </div>
//       ))}
//     </div>

//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
