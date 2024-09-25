function twoFer(name) {
    if (name === void 0) { name = "you"; }
    return "one for ".concat(name, ", one for me");
}
function isLeapYear(year) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        return true;
    }
    return false;
}
function twoFer2(person) {
    if (person === void 0) { person = "you"; }
    return "One for ".concat(person, ", one for me");
}
var isLeapYear2 = function (year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
console.log(isLeapYear(2012));
console.log(isLeapYear2(2020));
console.log(twoFer2("Saitama"));
