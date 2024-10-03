"use strict";
// public and private ony exists in typescript
// by default -> everything is public. no need to specify, but for clarity
// if there is no setter for the property then it becomes readonly
class Player {
    constructor(first, last) {
        this.score = 0;
        this.first = first;
        this.last = last;
        this.secretMethod();
    }
    secretMethod() {
        console.log("New secret method");
    }
}
const rockey = new Player("rockey", "rock");
// console.log(rockey.score);
// PARAMETER PROPERTIES SHORTHAND
class Player2 {
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
        this.secretMethod();
    }
    secretMethod() {
        console.log("New secret method");
    }
    get fullname() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative");
        }
        else {
            this._score = newScore;
        }
    }
}
