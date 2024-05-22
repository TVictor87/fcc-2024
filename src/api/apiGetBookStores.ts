// src/api/apiGetBookStores.ts
import logo from '../logo.svg';

export interface Book {
    name: string;
    author: string;
  }
  
  export interface BookStoreData {
    logo: string;
    name: string;
    books: Book[];
    date: string;
    website: string;
    rating: number;
    countryCode: string;
  }
  
  export const apiGetBookStores = async (): Promise<BookStoreData[]> => {
    // Mock data, replace with actual API call
    return [
      {
        logo: logo,
        name: 'Book store name',
        books: [
          { name: 'Book Name 1', author: 'Author 1' },
          { name: 'Book Name 2', author: 'Author 2' }
        ],
        date: '2018-11-22T00:00:00Z',
        website: 'http://www.bookstore.com',
        rating: 4,
        countryCode: 'US'
      },
      {
        logo: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19',
        name: 'Book store name 2',
        books: [
          { name: 'Book Name 1', author: 'Author 1' },
          { name: 'Book Name 2', author: 'Author 2' }
        ],
        date: '2018-11-22T00:00:00Z',
        website: 'http://www.bookstore2.com',
        rating: 5,
        countryCode: 'GB'
      },
      {
        logo: 'https://marketplace.canva.com/EAF-jFqBHBA/1/0/900w/canva-blue-book-reading-concept-phone-wallpaper-F51QYzgB6q0.jpg',
        name: 'Book store name 3',
        books: [],
        date: '2018-11-22T00:00:00Z',
        website: 'http://www.bookstore3.com',
        rating: 0,
        countryCode: 'CA'
      }
    ];
  };
  