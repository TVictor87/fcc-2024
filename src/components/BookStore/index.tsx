// src/components/BookStore/index.tsx

import React, { useEffect, useState } from "react";
import BestSellingTable from "../BestSellingTable";
import CountryFlag from "../CountryFlag";
import Rating from "../Rating";
import { apiGetCountryFlag } from "../../api/apiGetCountryFlag";
import styles from "./styles.module.css";

interface Book {
  name: string;
  author: string;
}

interface BookStoreProps {
  logo: string;
  name: string;
  books: Book[];
  date: string;
  website: string;
  rating: number;
  countryCode: string;
}

// TODO: Is it better to put BSP as params?
const BookStore: React.FC<BookStoreProps> = ({
  logo,
  name,
  books,
  date,
  website,
  rating,
  countryCode,
}) => {
  const [flagUrl, setFlagUrl] = useState<string>("");

  useEffect(() => {
    const fetchFlag = async () => {
      const flag = await apiGetCountryFlag(countryCode);
      setFlagUrl(flag);
    };

    fetchFlag();
  }, [countryCode]);

  return (
    <div className={styles.bookstoreCard}>
      <div className={styles.logo}>
        <img src={logo} alt="Bookstore logo" className={styles.logoImage} />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>🏠 {name}</h2>
          <Rating rating={rating} />
        </div>
        <BestSellingTable books={books} />
        <div className={styles.footer}>
          <span className={styles.date}>
            {new Date(date).toLocaleDateString("en-GB")} -{" "}
            <a href={website}>{website}</a>
          </span>
          <CountryFlag flagUrl={flagUrl} countryCode={countryCode} />
        </div>
      </div>
    </div>
  );
};

export default BookStore;
