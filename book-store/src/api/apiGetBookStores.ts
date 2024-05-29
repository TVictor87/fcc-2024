import type { Book, BookStoreData, BookStoreResponse } from "./types";
// import { fakeBookStores } from "../mock/fakeBookStores";
import { STORES_API_URL } from "../config";

export const apiGetBookStores = async (): Promise<BookStoreData[]> => {
  const response = await fetch(STORES_API_URL);
  const jsonResponse = await response.json();

  const bookStoresResponse: BookStoreResponse[] = jsonResponse?.data;
  const includedResponse = jsonResponse?.included;

  const bookStores: BookStoreData[] = bookStoresResponse.map(
    (store: BookStoreResponse): BookStoreData => {
      const storeBooks: Book[] = store.relationships.books?.data.map(
        (book: Book): Book => {
          // Get Book Detail
          const bookDetail = includedResponse.find(
            (item: any) => item.type === "books" && item.id === book.id
          );

          // Get Author Detail
          const authorDetail = includedResponse.find(
            (item: any) =>
              item.type === "authors" &&
              item.id === bookDetail.relationships.author.data.id
          );
          return {
            id: book.id,
            name: bookDetail.attributes.name,
            author: authorDetail.attributes.fullName,
            copiesSold: bookDetail.attributes.copiesSold,
          };
        }
      );

      // GetCountryCode
      const countryCode = includedResponse.find(
        (item: any) =>
          item.type === "countries" &&
          item.id === store.relationships.countries.data.id
      )?.attributes?.code;

      return {
        storeImage: store.attributes.storeImage,
        name: store.attributes.name,
        establishmentDate: new Date(store.attributes.establishmentDate),
        website: store.attributes.website,
        rating: store.attributes.rating,

        books: storeBooks,

        countryCode: countryCode,
      };
    }
  );

  return bookStores;
};
