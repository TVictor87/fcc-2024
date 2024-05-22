// src/components/BestSellingTable/index.tsx

import React from "react";
import styles from "./styles.module.css";

interface Book {
  name: string;
  author: string;
}

interface BestSellingTableProps {
  books: Book[];
}

const BestSellingTable: React.FC<BestSellingTableProps> = ({ books }) => {
  return (
    <div>
      {/* <h3>Best-selling books</h3> */}
      {books.length > 0 ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th colSpan={2}>Best-selling books</th>
              {/* <th>Author</th> */}
            </tr>
          </thead>
          <tbody>
            {books.slice(0, 2).map((book, index) => (
              <tr key={index}>
                <td>📖 {book.name}</td>
                <td>👤 {book.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default BestSellingTable;
