































// Creating a Map to store books and their authors
let bookMap = new Map();

// Adding books to the map
bookMap.set('The Great Gatsby', 'F. Scott Fitzgerald');
bookMap.set('To Kill a Mockingbird', 'Harper Lee');
bookMap.set('1984', 'George Orwell');
bookMap.set('The Catcher in the Rye', 'J.D. Salinger');

// Displaying the books and their authors
console.log('Books and Authors:');
bookMap.forEach((author, book) => {
    console.log(`${book} by ${author}`);
});

// Checking if a specific book is in the map
let bookToFind = 'To Kill a Mockingbird';
if (bookMap.has(bookToFind)) {
    console.log(`${bookToFind} is in the collection.`);
} else {
    console.log(`${bookToFind} is not in the collection.`);
}

// Removing a book from the map
let bookToRemove = '1984';
if (bookMap.has(bookToRemove)) {
    bookMap.delete(bookToRemove);
    console.log(`${bookToRemove} has been removed.`);
} else {
    console.log(`${bookToRemove} is not in the collection.`);
}

// Displaying the updated books and their authors
console.log('\nUpdated Books and Authors:');
bookMap.forEach((author, book) => {
    console.log(`${book} by ${author}`);
});


