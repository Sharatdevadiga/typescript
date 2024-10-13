// Type of guards
function triple(value: number | string): string | number {
  if (typeof value === "string") {
    return value.repeat(3);
  }

  return value * 3;
}

//  Truthiness guard
const el = document.getElementById("idk");
if (el) {
  console.log(el);
} else {
  console.log(el);
}

const printLetters = (word?: string) => {
  if (word) {
    for (let ch of word) {
      console.log(ch);
    }
  } else {
    console.log("No word provided");
  }
};

// EQUALITY NARROWING
function someDemo(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase();
  } else {
  }
}

someDemo(2, "2");

// In operator
const pet = { name: "kitty", age: 20 };
console.log("name" in pet);
console.log("age" in pet);

interface Movie {
  tite: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodesDuration: number;
}

function getRuntime(media: Movie | TVShow) {
  if ("duration" in media) {
    return media.duration;
  }
  return media.numEpisodes * media.episodesDuration;
}

const duration1 = getRuntime({
  title: "The Office",
  numEpisodes: 201,
  episodesDuration: 30,
});
console.log(duration1);

const duration2 = getRuntime({ tite: "martian", duration: 120 });
console.log(duration2);

// instance of narrowing
function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
}

class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printname(entity: User | Company) {
  if (entity instanceof User) {
    console.log(entity.username);
  } else {
    console.log(entity.name);
  }
}

// Type predicates
interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    animal;
    return "Meow";
  } else {
    return "Woof";
  }
}

// DISCRIMINATE UNIONS
interface Rooster {
  kind: "rooster";
  name: string;
  weight: number;
  age: number;
}

interface Cow {
  kind: "cow";
  name: string;
  weight: number;
  age: number;
}

interface Pig {
  kind: "pig";
  name: string;
  weight: number;
  age: number;
}

interface Sheep {
  kind: "sheep";
  name: string;
  weight: number;
  age: number;
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "rooster":
      return "cook du coo";
    case "cow":
      return "moo";
    case "pig":
      return "oink";
    case "sheep":
      return "baaa!";
    default:
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
}

const stevie: Rooster = {
  name: "stevie",
  kind: "rooster",
  weight: 2,
  age: 1.7,
};

console.log(getFarmAnimalSound(stevie));
