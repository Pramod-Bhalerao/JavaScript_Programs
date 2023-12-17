const movies = [
  { name: "The Shawshank Redemption", genre: "Drama", year: 1994 },
  { name: "The Godfather", genre: "Crime", year: 1972 },
  { name: "Pulp Fiction", genre: "Crime", year: 1994 },
  { name: "The Dark Knight", genre: "Action", year: 2008 },
  { name: "Forrest Gump", genre: "Drama", year: 1994 },
  { name: "Schindler's List", genre: "Biography", year: 1993 },
  {
    name: "The Lord of the Rings: The Return of the King",
    genre: "Adventure",
    year: 2003,
  },
  { name: "Inception", genre: "Action", year: 2010 },
  { name: "The Matrix", genre: "Action", year: 1999 },
  { name: "Fight Club", genre: "Drama", year: 1999 },
  { name: "The Godfather: Part II", genre: "Crime", year: 1974 },
  { name: "The Silence of the Lambs", genre: "Crime", year: 1991 },
  { name: "Seven", genre: "Crime", year: 1995 },
  { name: "The Shawshank Redemption", genre: "Drama", year: 1994 },
  { name: "Forrest Gump", genre: "Drama", year: 1994 },
  { name: "The Dark Knight Rises", genre: "Action", year: 2012 },
  { name: "The Green Mile", genre: "Crime", year: 1999 },
  {
    name: "The Lord of the Rings: The Fellowship of the Ring",
    genre: "Adventure",
    year: 2001,
  },
  {
    name: "The Lord of the Rings: The Two Towers",
    genre: "Adventure",
    year: 2002,
  },
  { name: "The Matrix Reloaded", genre: "Action", year: 2003 },
  { name: "The Matrix Revolutions", genre: "Action", year: 2003 },
  { name: "The Departed", genre: "Crime", year: 2006 },
  { name: "Gladiator", genre: "Action", year: 2000 },
  { name: "The Prestige", genre: "Drama", year: 2006 },
  { name: "The Usual Suspects", genre: "Crime", year: 1995 },
  { name: "The Pianist", genre: "Biography", year: 2002 },
  { name: "Memento", genre: "Mystery", year: 2000 },
  { name: "American History X", genre: "Drama", year: 1998 },
  { name: "Goodfellas", genre: "Crime", year: 1990 },
  { name: "The Lion King", genre: "Animation", year: 1994 },
  { name: "Titanic", genre: "Drama", year: 1997 },
  { name: "The Great Gatsby", genre: "Drama", year: 2013 },
  { name: "Inglourious Basterds", genre: "Adventure", year: 2009 },
  { name: "Django Unchained", genre: "Drama", year: 2012 },
  { name: "The Wolf of Wall Street", genre: "Biography", year: 2013 },
  { name: "The Revenant", genre: "Action", year: 2015 },
  { name: "A Beautiful Mind", genre: "Biography", year: 2001 },
  { name: "The Social Network", genre: "Biography", year: 2010 },
  { name: "Interstellar", genre: "Adventure", year: 2014 },
  { name: "The Hateful Eight", genre: "Crime", year: 2015 },
  { name: "Black Swan", genre: "Drama", year: 2010 },
  { name: "La La Land", genre: "Drama", year: 2016 },
  { name: "Forrest Gump", genre: "Drama", year: 1994 },
  { name: "Casablanca", genre: "Drama", year: 1942 },
  { name: "Gone with the Wind", genre: "Drama", year: 1939 },
  { name: "Citizen Kane", genre: "Drama", year: 1941 },
  { name: "The Wizard of Oz", genre: "Adventure", year: 1939 },
  { name: "The Godfather", genre: "Crime", year: 1972 },
];

// Example of using filter to get movies released after 2000
let recentMovies = movies.filter(function (movie) {
  return movie.year > 2000;
});
console.log("Movies are relesed after year 2000 :", recentMovies);

// Example of using filter to get movies with genre of action
recentMovies = movies.filter(function (movie) {
  return movie.genre === "Action";
});
console.log("Action Movies : ", recentMovies);

