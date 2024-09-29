const dog = {
  name: "rockey",
  breed: "bull dog",
  age: 0.5,
};

function printName(person: { first: string; last: string }): void {
  console.log(`Hello ${person.first}- ${person.last}`);
}

printName({ first: "Thomas", last: "Tommy" });

// OBJECT TYPE TO THE VARIABLE
let coordinate: { x: number; y: number } = { x: 24, y: 25 };

// OBJECT TYPE -> RETURNING FROMT HE FUNCTION
function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

printName({ first: "Mick", last: "jagger" });

const singer = { first: "Mick", last: "jagger", age: 23 };
printName(singer);

// TYPE ALIASING
type Person = {
  name: string;
  age: number;
};

type Point = {
  x: number;
  y: number;
};

let coordinate2: Point = { x: 10, y: 10 };

function randomCoordinate2(): Point {
  return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}

type MyNum = number;
let age: MyNum = 20;

// NESTED OBJECTS
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "song 1",
  artist: "artist1",
  numStreams: 121212,
  credits: {
    producer: "Phil",
    writer: "Alex North",
  },
};

const earnings: number = calculatePayout(mySong);
printSong(mySong);

console.log(earnings);

// Optional properties -> ?
type Point4 = {
  x: number;
  y: number;
  z?: number;
};

const mypt2: Point4 = { x: 1, y: 2 };

// READONLY PROPERTIES
type User = {
  readonly id: number; //cannot be modified
  userName: String;
};

const user1: User = {
  id: 1234,
  userName: "Gru",
};

// INTERSECTION OF TYPES -> &
type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "Yellow",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat & Dog & { age: number };

const christy: CatDog = {
  numLives: 7,
  breed: "Huskey",
  age: 9,
};
