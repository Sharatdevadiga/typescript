// public, protected and private ony exists in typescript
// by default -> everything is public. no need to specify, but for clarity
// public is accissible everywhere
// protected properties are only accessible by the children classes
// private -> only in that class
// if there is no setter for the property then it becomes readonly
class Player {
  public readonly first: string;
  public readonly last: string;
  private score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
    this.secretMethod();
  }

  private secretMethod() {
    console.log("New secret method");
  }
}

const rockey = new Player("rockey", "rock");
// console.log(rockey.score);

// PARAMETER PROPERTIES SHORTHAND
class Player2 {
  constructor(
    public first: string,
    public last: string,
    protected _score: number
  ) {
    this.secretMethod();
  }

  private secretMethod() {
    console.log("New secret method");
  }

  get fullname(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative");
    } else {
      this._score = newScore;
    }
  }
}

class SuperPlayer extends Player2 {
  isAdmin: boolean = true;
  maxScore() {
    this._score = 99999999;
  }
}

// CLASSES AND INTERFACES -> implements
// we can also have interface inheritance
interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}

  print() {
    console.log(`this jacket is a ${this.brand} branded with ${this.color}`);
  }
}

const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "blue");

// ABSTRACT CLASSES
// cannot create a new instances from that class
abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number; //all inheriting class must implement this method
  greet() {
    console.log("oooohhhh");
  }
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay() {
    return this.salary;
  }
}

class partTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourleyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay() {
    return this.hourleyRate * this.hoursWorked;
  }
}

const betty = new FullTimeEmployee("betty", "Jack", 9555);
console.log(betty.getPay());

const bill = new partTimeEmployee("bill", "bell", 20, 500);
console.log(betty.getPay());
