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
