//  _ -> prpotected, #-> private field

class Player {
  #score = 0;
  numLives = 10;
  static descreption = "Player in Our game";

  constructor(first, last) {
    this.first = first;
    this.last = last;
    console.log("In constructor");
    this.#secret();
  }
  get fullName() {
    return `${this.first} ${this.last}`;
  }

  get score() {
    return this.#score;
  }

  set score(newSocre) {
    if (newSocre > 0) this.#score = newSocre;
    else console.log("scoremust be positive");
  }

  static randomPlayer() {
    return new Player("Andy", "Samberg");
  }

  getScore() {
    return this.#score;
  }
  setScore(score) {
    if (score > 0) {
      this.#score = score;
    }
  }

  set fullname(newname) {
    const [first, last] = newname.split(" ");
    this.first = first;
    this.last = last;
  }

  taunt() {
    console.log("BOO!!");
  }

  looseLife() {
    this.numLives -= 1;
  }
  #secret() {
    console.log("secret");
  }
}

const player1 = new Player("blue", "steel");
player1.taunt();
console.log(player1.first);
console.log(player1.last);
console.log(player1.numLives);
player1.looseLife();
console.log(player1.numLives);
console.log(player1.getScore());
player1.setScore(20);
console.log(player1.fullName);
console.log(player1.score);

console.log(Player.descreption);
console.log(Player.randomPlayer());

player1.fullName = "adam jane";

player1.score = 12;

console.log(player1);

const player2 = new Player("charlie", "brown");
player2.taunt();

// Inheritance
class AdminPlayer extends Player {
  constructor(first, last, powers) {
    super(first, last);
    this.powers = powers;
  }
  isAdmin = true;
}

const adminPlayer1 = new AdminPlayer("admin", "mcAdmin");
adminPlayer1.taunt();
