const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// DESTRUCTURING OBJECTS
const book = getBook(1);

// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);

// DESTRUCTURING ARRAYS AND REST OPERATOR

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, otherGenres);

// SPREAD OPERATOR
const newGenres = [...genres, "epic fantasy"];
console.log(newGenres);

const updatedBook = {
  ...book,
  moviePublicationDate: "2001-12-19", // Adding a new property
  pages: 1210, // Overwriting an Existing property: The last list property overwrites the previous 'pages' property from book
};

console.log(updatedBook);

// TEMPLATE LITERAL
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}`;
const fact = `${2 + 4} is a number`;
summary;

// TERNARY OPERATOR
const pagesRange =
  book.pages > 1000 ? "over one thousand" : "less than one thousand";
console.log(`The book has ${pagesRange} pages`);

const summary_2 = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;

// ARROW FUNCTIONS
// function getYear(str) {
//   return str.split("-")[0];
// }

getYear = (str) => str.split("-")[0];

console.log(getYear(publicationDate));

const summary_3 = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;

// SHORT-CIRCUITING and LOGICAL OPERATORS: &&, ||, ??
console.log(true && "Some String");
console.log(false && "Some String");
console.log(hasMovieAdaptation && "This book as a movie");

console.log("jonas" && "Some string");
console.log(0 && "Some string");

console.log(true || "Some String");
console.log(false || "Some String");

// Default to a value if the spanish translation is undefined
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
console.log(spanishTranslation);

console.log(book.reviews.librarything.reviewsCount);
const countWrong = getBook(2).reviews.librarything.reviewsCount || "no data";
countWrong;

// Nullish Coalescing operator
// only shortcircuit when the value is null or undefined (not 0 or "")
const countCorrect = getBook(2).reviews.librarything.reviewsCount ?? "no data";
countCorrect;

// Optional Chaining
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything.reviewsCount;
  return goodreads + librarything;
}

function getTotalReviewCountOptionalChaining(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));

// ERROR below
// console.log(getTotalReviewCount(getBook(3)));

console.log(getTotalReviewCountOptionalChaining(getBook(3)));

// Array Map Function
const books = getBooks();

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCountOptionalChaining(book),
}));
essentialData;

// Array Filter Method
const longBooksWithMovies = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovies;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

// Array Reduce Method
const totalPages = books.reduce((acc, book) => acc + book.pages, 0);
totalPages;

// Array Sort Method
const demoArray = [3, 7, 1, 9, 6];
const sorted = demoArray.slice().sort((a, b) => a - b);
demoArray;
sorted;

const sortedByPages = books
  .slice()
  .sort((a, b) => a.pages - b.pages)
  .map((book) => ({ title: book.title, pages: book.pages }));
sortedByPages;

// Immutable Arrays - don't mutate state
// 1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) Delete a book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3) Update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);
booksAfterUpdate;

// Promises
console.log(fetch("https://jsonplaceholder.typicode.com/todos/1"));

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("Immediately Execute this!");

// Async/Await
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
}

const todos = getTodos();
console.log(todos);

console.log("Immediately Execute this!");
