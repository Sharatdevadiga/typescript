// any type -> not ideal
function square(num) {
  //   num.toUpperCase();
  return num * num;
}

console.log(square(3));
// console.log(square("abc"));
// console.log(square(true));

// FUNCTION PARAMETER ANNOTATION
function square2(num: number) {
  return num * num;
}

console.log(square(3));
// console.log(square("abc")); -> gives error
// console.log(square(true)); -> gives error

function greet(person: string) {
  return `Hi there, ${person}`;
}

console.log(greet("King"));
// greet(true)  -> gives error

// MULTIPLE PARAMETERS
const doSomething = (person: string, age: number, isFunny: boolean) => {
  return `${person} of ages ${age} is ${isFunny ? "funny" : "not funny"}`;
};

doSomething("rockey", 20, false);

// DEFAULT VALUES
function greet2(person: string = "stranger") {
  return `Hi there, ${person}`;
}

console.log(greet2("King"));
console.log(greet2());

// RETURN TYPE
function square3(num: number): number {
  return num * num;
}

function greet3(person: string = "stranger"): string {
  return `Hi there, ${person}`;
}

// function square4(num: number){
//     num * num
// }
// square4(4) //returns void

// MULTIPLE RETURN TYPES
function rando(num: number): string | number {
  if (Math.random() < 0.5) {
    return num.toString();
  }

  return num;
}

// WITH ARROW FUNCTION
const add = (x: number, y: number): number => x + y;

// ANONYMOUS FUNCTION
const colors = ["red", "green", "blue"];
colors.map((color) => {
  return color.toUpperCase();
});

// VOID TYPE
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
  //   return "" -> shows error
}

// NEVER TYPE
function makeError(msg: string): never {
  // return undefined -> gives error
  throw new Error(msg);
}
// used for never ending functions
function gameLoop(): never {
  while (true) {
    console.log("game loop running");
  }
}
