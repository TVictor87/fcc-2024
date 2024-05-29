# Book Store

This project is a Book Store application featuring a frontend built with ReactJS and a backend developed with NodeJS. The frontend and backend run on different ports and should be started sequentially to ensure proper functionality.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Project](#running-the-project)
  - [Backend](#run-backend)
  - [Frontend](#run-frontend)
- [Project Structure](#project-structure)
- [Configuration](#configuration)

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14.x or higher)
- npm (v6.x or higher)

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/TVictor87/fcc-2024.git
cd fcc-2024
```

2. Install dependencies for both frontend and backend:

```bash
cd book-store
npm install

cd ../book-store-api
npm install

cd ..
```

## Running the Project

Please start the backend first, as the frontend relies on it to fetch data through API calls.

### Backend

To start the backend:

```bash
cd book-store-api
npm start
```

This command will start the backend on http://localhost:3001.

### Frontend

To start the frontend:

```bash
cd book-store
npm start
```

This command will start the frontend on http://localhost:3000

## Project Structure

```bash
book-store/
├── node_modules/
├── public/
├── src/
│ ├── api/
│ │ ├── apiGetBookStores.ts
│ │ ├── apiGetCountryFlag.ts
│ │ └── types.d.ts
│ ├── components/
│ │ ├── BestSellingTable/
│ │ │ ├── index.tsx
│ │ │ └── styles.module.css
│ │ ├── BookStore/
│ │ │ ├── index.tsx
│ │ │ └── styles.module.css
│ │ ├── CountryFlag/
│ │ │ ├── index.tsx
│ │ │ └── styles.module.css
│ │ └── Rating/
│ │ ├── index.tsx
│ │ └── styles.module.css
│ ├── mock/
│ │ └── fakeBookStores.ts
│ ├── App.css
│ ├── App.test.tsx
│ ├── App.tsx
│ ├── config.ts
│ ├── index.css
│ ├── index.tsx
│ ├── react-app-env.d.ts
│ ├── reportWebVitals.ts
│ └── setupTests.ts
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

```bash
book-store-api/
├── node_modules/
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── README.md
```

## Configuration

All URLs and static information are stored in the config.ts file in the frontend. This helps to manage and update URLs and static data easily.

File location:

```bash
book-store/src/config.ts
```

The configuration file contains constants used throughout the application. These constants help manage URLs and static information in a centralized way, making it easier to maintain and update the application.

```bash
// API URLs
export const API_BASE_URL = "http://localhost:3001";
export const STORES_API_URL = `${API_BASE_URL}/stores`;

// API to get country flag
export const COUNTRY_FLAG_API_URL = "https://restcountries.com/v3.1/alpha";

// Static Information
export const APP_NAME = "Book Store";
export const APP_VERSION = "1.0.0";

// Number of books to display per store
export const BOOKS_PER_STORE = 2;
```

Here's a breakdown of each constant:

**API_BASE_URL:** The base URL for the backend API. This is the starting point for all API requests.
**STORES_API_URL:** The URL endpoint to fetch store data. It is constructed by appending /stores to the API_BASE_URL.

**COUNTRY_FLAG_API_URL:** The base URL for fetching country flag images. This URL is used to retrieve flag images based on the country code.

**APP_NAME:** The name of the application. This can be used for display purposes throughout the app, such as in the header or title.
**APP_VERSION:** The version of the application. This helps keep track of the current version of the app and can be useful for debugging and user support.

**BOOKS_PER_STORE:** The maximum number of books to display for each store. This constant helps control the number of books shown in the UI, ensuring consistency and manageability.
