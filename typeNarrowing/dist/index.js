"use strict";
// Type of guards
function triple(value) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
}
//  Truthiness guard
const el = document.getElementById("idk");
if (el) {
    console.log(el);
}
else {
    console.log(el);
}
const printLetters = (word) => {
    if (word) {
        for (let ch of word) {
            console.log(ch);
        }
    }
    else {
        console.log("No word provided");
    }
};
// EQUALITY NARROWING
function someDemo(x, y) {
    if (x === y) {
        x.toUpperCase();
    }
    else {
    }
}
someDemo(2, "2");
