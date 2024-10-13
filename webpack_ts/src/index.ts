import Dog from "./Dog";
import ShelterDog from "./ShelterDog";
import { add, multiply, divide } from "./utils";

const elten = new Dog("Elten", "German shephard", 5);
elten.bark();

const buffy = new ShelterDog("Buffy", "Golden Retriever", 3, "Desert");
buffy.bark();

console.log(add(4, 5));
console.log(multiply(4, 5));
console.log(divide(4, 5));
