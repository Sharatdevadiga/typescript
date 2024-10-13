"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const lodash_1 = __importDefault(require("lodash")); //npm i --save-dev @types/lodash
lodash_1.default.sample([23, 43, 12, 56, 78, 34, 23, 12]);
axios_1.default
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => {
    console.log("Woo!!");
    const { data } = res;
    printUser(data);
})
    .catch((e) => {
    console.log("Boo!!", e);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.username);
    console.log(user.email);
    console.log(user.phone);
}
axios_1.default
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
    console.log("Woo!!");
    const { data } = res;
    data.forEach((user) => printUser(user));
})
    .catch((e) => {
    console.log("Boo!!", e);
});
