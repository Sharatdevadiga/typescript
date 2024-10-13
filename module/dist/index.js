import { add, sample as sampleFn, PI } from "./utils.js";
import User, { userHelper } from "./User.js";
console.log(sampleFn([12, 23, 34, 45, 56, 67, 78, 89, 90, 100]));
console.log(add(23, 43));
console.log(PI);
const user = new User("John", "example123@");
console.log(user);
userHelper();
const sample = 123;
