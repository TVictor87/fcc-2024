//Fake data for book stores
import type { BookStoreData } from "../api/types";

export const fakeBookStores: BookStoreData[] = [
  {
    storeImage: "logo.svg",
    name: "Book store name",
    books: [
      { id: 10, name: "Book Name 1", author: "Author 1", copiesSold: 100 },
      { id: 5, name: "Book Name 2", author: "Author 2", copiesSold: 80 },
    ],
    establishmentDate: "2018-11-22T00:00:00Z",
    website: "http://www.bookstore.com",
    rating: 4,
    countryCode: "US",
  },
  {
    storeImage: "https://images.unsplash.com/photo-1541963463532-d68292c34b19",
    name: "Book store name 2",
    books: [
      { id: 1, name: "Book Name 1", author: "Author 1", copiesSold: 100 },
      { id: 2, name: "Book Name 2", author: "Author 2", copiesSold: 80 },
    ],
    establishmentDate: "2018-11-22T00:00:00Z",
    website: "http://www.bookstore2.com",
    rating: 5,
    countryCode: "GB",
  },
  {
    storeImage:
      "https://marketplace.canva.com/EAF-jFqBHBA/1/0/900w/canva-blue-book-reading-concept-phone-wallpaper-F51QYzgB6q0.jpg",
    name: "Book store name 3",
    books: [],
    establishmentDate: "2018-11-22T00:00:00Z",
    website: "http://www.bookstore3.com",
    rating: 0,
    countryCode: "CA",
  },
];
