var pt = { x: 123, y: 2324 };
var pt2 = { x: 234, y: 232 };
var Thomas = {
    id: 1234,
    first: "Thomas",
    last: "hardey",
    nickName: "th",
    sayHi: function () {
        return "Hello";
    },
    sayHi2: function () {
        return "hello";
    },
};
var shooes = {
    name: "nike",
    price: 10,
    applyDiscount: function (amount) {
        return this.price * (1 - amount / 100);
    },
};
