let movieTitle: string = "Interstellar";
movieTitle = "Back to the future";
// movieTitle = 34  -> gives the error
// movieTitle.upper() -> not exists so gives the error
// movieTitle.toUpperCase() -> also gives warning to coorect it

let numCatLives: number = 9;
numCatLives += 1;
// numCatLives = "Zero" -> warns

let gameOVer: boolean = false;
gameOVer = true;
// gameOver = 0 -> warns

// TYPE INFERENCE
let tvShow = "Loki";
tvShow = "squid game";
// tvShow = false -> error

let isFunny = false;
isFunny = true;
// isFunny = "abc" -> error message

// THE ANY TYPE
let thing: any = "hello";
thing = 1;
thing = false;
thing();
thing.toUpperCase();

let thing2 = "hello";
// thing() -> error

// SCENARIO THAT REQUIRES TYPE ANNOTATIONS
const movies = ["arrival", "aliens", "the thing"];
let foundMovie: string;

for (let movie of movies) {
  if (movie === "aliens") {
    foundMovie = movie;
  }
}

console.log(foundMovie);
