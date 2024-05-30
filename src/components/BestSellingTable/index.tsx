// src/components/BestSellingTable/index.tsx

import React from "react";
import styles from "./styles.module.css";
import { Book } from "../../api/types";
import { BOOKS_PER_STORE } from "../../config";

interface BestSellingTableProps {
  books: Book[];
}

const BestSellingTable: React.FC<BestSellingTableProps> = ({ books }) => {
  return (
    <div>
      {books?.length > 0 ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th colSpan={2}>Best-selling books</th>
            </tr>
          </thead>
          <tbody>
            {books
              .sort((a, b) => b.copiesSold - a.copiesSold)
              .slice(0, BOOKS_PER_STORE)
              .map((book, index) => (
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
