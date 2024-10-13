// import type something -> is unique to import th etypes in the ts
// so that it wont reflect in js file while transpiling with babel

// import type { Person } from "./types";
import { Person } from "./types";

export default class User implements Person {
  constructor(public username: string, public email: string) {}
  logout() {
    console.log(`${this.username} has been logged out`);
  }
}

export function userHelper() {
  console.log("USER HELPER");
}
