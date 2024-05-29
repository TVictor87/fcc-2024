export interface BookStoreData extends BookstoreAttributes {
  books: Book[];

  countryCode: string;
}

export interface BookStoreResponse {
  attributes: BookstoreAttributes;

  relationships: {
    books: {
      data: Book[];
    };

    countries: {
      data: {
        id: string;
      };
    };
  };
}

export interface Book {
  id: number;
  name: string;
  author: string;
  copiesSold: number;
}

export interface BookstoreAttributes {
  storeImage: string;
  name: string;
  establishmentDate: Date;
  website: string;
  rating: number;
}
