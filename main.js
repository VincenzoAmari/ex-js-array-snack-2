const books = [
  {
    title: "React Billionaire",
    pages: 250,
    author: {
      name: "Alice",
      age: 35,
    },
    available: false,
    price: "101€",
    tags: ["advanced", "js", "react", "senior"],
  },
  {
    title: "Advanced JS",
    pages: 500,
    author: {
      name: "Bob",
      age: 20,
    },
    available: true,
    price: "25€",
    tags: ["advanced", "js", "mid-senior"],
  },
  {
    title: "CSS Secrets",
    pages: 320,
    author: {
      name: "Alice",
      age: 17,
    },
    available: true,
    price: "8€",
    tags: ["html", "css", "junior"],
  },
  {
    title: "HTML Mastery",
    pages: 200,
    author: {
      name: "Charlie",
      age: 50,
    },
    available: false,
    price: "48€",
    tags: ["html", "advanced", "junior", "mid-senior"],
  },
];

// snack 1

function somma(a, b) {
  return a + b;
}

const longBooks = books.filter((book) => book.pages > 300);

const longBooksTitles = longBooks.map((book) => book.title);

console.log(longBooks);
console.log(longBooksTitles);
longBooksTitles.forEach((title) => console.log(title));

//snack 2

const availableBooks = books.filter((book) => book.available === true);

console.log(availableBooks);

const discountedBooks = availableBooks.map((book) => {
  const priceNumber = parseFloat(book.price.replace("€", ""));
  const discountedPrice = (priceNumber * 0.8).toFixed(2);
  return {
    ...book,
    price: discountedPrice + "€",
  };
});

console.log("i libi scontati sono :", discountedBooks);

const fullPricedBook = discountedBooks.find((book) => {
  const priceNumber = parseFloat(book.price.replace("€", ""));
  return priceNumber % 1 === 0;
});

console.log(fullPricedBook);

//snack 3

const authors = books.map((book) => book.author);
const areAuthorsAdults = authors.every((author) => author.age >= 18);

if (areAuthorsAdults) {
  authors.sort((a, b) => a.age - b.age);
} else {
  authors.sort((a, b) => b.age - a.age);
}

console.log(areAuthorsAdults);

// snack 4

const ages = books.map((book) => book.author.age);
const agesSum = ages.reduce((acc, age) => {
  return acc + age;
}, 0);

console.log(agesSum / ages.length);

// snack 5

const ids = [2, 13, 7, 21, 19];

async function getBooks(ids) {
  const booksUrl = "http://localhost:3333/books/";

  const bookPromise = ids.map((id) =>
    fetch(`${booksUrl}${id}`).then((res) => res.json())
  );

  const books = await Promise.all(bookPromise);

  return books;
}

getBooks(ids).then((books) => console.log(books));

//snack 6

const areThereAvailableBooks = books.some((books) => books.available);

const booksByPrice = [...books].sort((a, b) => a.price - b.price);

const booksByPricein = booksByPrice.sort((a, b) => a.available - b.available);

//snack 7

const tagCounts = books
  .map((book) => book.tags)
  .reduce((acc, tags) => acc.concat(tags), [])
  .reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});
