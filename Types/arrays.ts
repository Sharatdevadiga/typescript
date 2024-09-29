const activeusers0: [] = []; //makes an empty array
// activeusers.push("steven") -> gives error

const activeusers: string[] = ["steve", "james", "krishna"];
activeusers.push("saitama");

const anyArray = [];

const ageList: number[] = [34, 35, 55];
ageList.push(44);

const bool: boolean[] = [true, false];

// syntax2
const names2: Array<string> = [];
const bools: Array<boolean> = [];

// custom type
type Point6 = {
  x: number;
  y: number;
};

const coords: Point6[] = [];
coords.push({ x: 12, y: 14 });

// multi dimensional arrays
const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
];

const demo: string[][][] = [[["1"]]];
