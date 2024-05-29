import React from "react";
import BestSellingTable from "../BestSellingTable";
import CountryFlag from "../CountryFlag";
import Rating from "../Rating";
import styles from "./styles.module.css";

import { BookStoreData } from "../../api/types";

interface BookStoreProps {
  store: BookStoreData;
}

const BookStore: React.FC<BookStoreProps> = ({ store }) => {
  return (
    <div className={styles.bookstoreCard}>
      <div className={styles.subwrap}>
        <div className={styles.logo}>
          <img
            src={store.storeImage}
            alt="Bookstore logo"
            className={styles.logoImage}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.header}>
            <h2>🏠 {store.name}</h2>
            <Rating rating={store.rating} />
          </div>
          <BestSellingTable books={store.books} />
        </div>
      </div>

      <div className={styles.footer}>
        <span className={styles.date}>
          {store.establishmentDate
            .toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })
            .replace(/\//g, ".")}{" "}
          - <a href={store.website}>{store.website}</a>
        </span>
        <CountryFlag countryCode={store.countryCode} />
      </div>
    </div>
  );
};

export default BookStore;
