// tsc --init
// tsc index.js
// tsc --watch

interface Chicken {
  breed: string;
  eggsPerWeek: number;
  name: string;
}

interface Chicken {
  age: number;
}

const norma: Chicken = {
  breed: "Strike",
  eggsPerWeek: 4,
  name: "norma",
  age: 2,
};

const juniper: Chicken = {
  breed: "Silkie",
  eggsPerWeek: 5,
  name: "juniper",
  age: 1,
};

function doTihing(thing: string) {
  console.log(thing);
}

let users: string[] | null | undefined = ["abcd", "efgh"];
users = null;
users: undefined;
