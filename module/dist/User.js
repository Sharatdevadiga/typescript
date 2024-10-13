// import type something -> is unique to import th etypes in the ts
// so that it wont reflect in js file while transpiling with babel
export default class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    logout() {
        console.log(`${this.username} has been logged out`);
    }
}
export function userHelper() {
    console.log("USER HELPER");
}
