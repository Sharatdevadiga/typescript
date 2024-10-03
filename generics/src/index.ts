function doThing(thing: number | string): number | string {
  return "";
}

const nums = [];
const nums2: number[] = [];
const nums3: Array<number> = [];
const str: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
console.dir(inputEl);
inputEl.value = "user321";

const button = document.querySelector<HTMLButtonElement>(".btn");
console.log(button)!;

// GENERIC FUNCTION
function identity<T>(item: T): T {
  return item;
}

identity<string>("abc");
identity<boolean>(true);
identity<number>(43);

interface Cat {
  name: string;
  breed: string;
}

identity<Cat>({ name: "kip", breed: "fur" });

// GENERIC WTITH ARRAY
function getRandomElement<T>(list: T[]): T {
  const idx = Math.floor(Math.random() * list.length);
  return list[idx];
}

getRandomElement<string>(["a", "b", "c"]);
getRandomElement<number>([1, 2, 3, 4, 5]);

// iNFERRED gENERIC TYPE -> no need to specify the types
getRandomElement(["a", "b", "c", "d"]);
getRandomElement([1, 2, 3, 4, 5]);

// GENERICS WITH MULTIPLE TYPES
function merge<T, U>(object1: T, object2: U): T & U {
  return {
    ...object1,
    ...object2,
  };
}

const comboObj = merge({ name: "colt" }, { pets: ["cat", "dog"] });

// TYPE CONSTRAINTS
function merge2<T extends object, U extends object>(
  object1: T,
  object2: U
): T & U {
  return {
    ...object1,
    ...object2,
  };
}

const comboObj2 = merge2({ name: "colt" }, { pets: ["cat", "dog"] });

// TYPE CONSTRAINT WITH INTERFACE
interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}
printDoubleLength("abcd");

// DEFAULT TYPE WITH GENERIXS
function makeEmptyList<T = number>(): T[] {
  return [];
}

const nums5 = makeEmptyList();
nums2.push(2);

const bools = makeEmptyList<boolean>();

// GENERIC CLASSES
interface Song {
  title: String;
  artist: String;
}

interface Video {
  title: String;
  creatoe: String;
  resolution: String;
}

class VlidePlaylist {
  public videos: Video[] = [];
}

class SongsPlaylist {
  public songs: Song[] = [];
}

class Playlist<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new Playlist<Song>();
const videos = new Playlist<Video>();
