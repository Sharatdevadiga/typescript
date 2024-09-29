let age: number | string = 21;
age = 23;
age = "24";

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  lng: number;
};

let coordinate: Point | Loc = { x: 1, y: 23 };
coordinate = { lat: 234.123, lng: 234.234 };

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

printAge(23);
printAge("23");

// TYPE NARROWING
function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}

const nums: number[] = [1, 2, 3, 4];
const stuff: any[] = [1, "a", true];

// UNION AND ARRAYS
const stuff2: (number | string)[] = [1, 2, 3, 4, "1"];

type Point2 = {
  x: number;
  y: number;
};

type Loc2 = {
  lat: number;
  lng: number;
};
const coords: (Point2 | Loc2)[] = [
  { x: 1, y: 3 },
  { lat: 23.34, lng: 34.234 },
];

// LITERAL TYPES
let zero: 0 = 0;

let mood: "happy" | "sad" = "happy";
mood = "sad";

type DayOfWeek = "Monday" | "Tuesday";
let today: DayOfWeek = "Monday";
