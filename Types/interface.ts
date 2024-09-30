type Point5 = {
  x: number;
  y: number;
};

interface Point6 {
  x: number;
  y: number;
}

const pt: Point5 = { x: 123, y: 2324 };
const pt2: Point6 = { x: 234, y: 232 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickName?: string;
  sayHi: () => string;
  sayHi2(): string;
}

const Thomas: Person = {
  id: 1234,
  first: "Thomas",
  last: "hardey",
  nickName: "th",
  sayHi: () => {
    return `Hello`;
  },
  sayHi2: () => {
    return "hello";
  },
};

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shooes: Product = {
  name: "nike",
  price: 10,
  applyDiscount(amount: number) {
    return this.price * (1 - amount / 100);
  },
};

// OPENING INTERFACES
interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const rockey: Dog = {
  name: "rockey",
  age: 2,
  breed: "german shephard",
  bark() {
    return "woof";
  },
};

// EXTENDING INTERFACES i.e INHERITING INTERFACES
// we can extend multiple interfaces
interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
  name: "chewey",
  age: 3,
  breed: "labridor",
  bark() {
    return "bark bark";
  },
  job: "guide dog",
};

// EXTENDING MULTIPLE INTERFACES
interface Person2 {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Person2, Employee {
  level: string;
  languages: string[];
}

const tony: Engineer = {
  id: 12234,
  name: "tony",
  email: "tony123@gmail.com",
  level: "senior",
  languages: ["JS", "python"],
};

// INTERFACES VS TYPES IN TYPESCRIPT
// 1. Interfaces only describe the shape of the object. union ccnt be performed with interfaces
type color = "red" | "blue" | "orange";

// 2. Interfaces can be reopened , but not the types
interface Chicken {
  breed: string;
}
interface Chicken {
  numEggs: number;
}

// 3. Interfaces can extend other interfaces using extends keyword.
//    but in type, we can use the &
