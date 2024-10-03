"use strict";
function doThing(thing) {
    return "";
}
const nums = [];
const nums2 = [];
const nums3 = [];
const str = [];
const inputEl = document.querySelector("#username");
console.dir(inputEl);
inputEl.value = "user321";
const button = document.querySelector(".btn");
console.log(button);
// GENERIC FUNCTION
function identity(item) {
    return item;
}
identity("abc");
identity(true);
identity(43);
identity({ name: "kip", breed: "fur" });
// GENERIC WTITH ARRAY
function getRandomElement(list) {
    const idx = Math.floor(Math.random() * list.length);
    return list[idx];
}
getRandomElement(["a", "b", "c"]);
getRandomElement([1, 2, 3, 4, 5]);
// iNFERRED gENERIC TYPE -> no need to specify the types
getRandomElement(["a", "b", "c", "d"]);
getRandomElement([1, 2, 3, 4, 5]);
// GENERICS WITH MULTIPLE TYPES
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ name: "colt" }, { pets: ["cat", "dog"] });
// TYPE CONSTRAINTS
function merge2(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj2 = merge2({ name: "colt" }, { pets: ["cat", "dog"] });
function printDoubleLength(thing) {
    return thing.length * 2;
}
printDoubleLength("abcd");
// DEFAULT TYPE WITH GENERIXS
function makeEmptyList() {
    return [];
}
const nums5 = makeEmptyList();
nums2.push(2);
const bools = makeEmptyList();
class VlidePlaylist {
    constructor() {
        this.videos = [];
    }
}
class SongsPlaylist {
    constructor() {
        this.songs = [];
    }
}
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
const videos = new Playlist();
