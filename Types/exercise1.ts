function twoFer(name: string = "you"): string {
  return `one for ${name}, one for me`;
}

function isLeapYear(year: number): boolean {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  }

  return false;
}

function twoFer2(person: string = "you"): string {
  return `One for ${person}, one for me`;
}

const isLeapYear2 = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

console.log(isLeapYear(2012));
console.log(isLeapYear2(2020));
console.log(twoFer2("Saitama"));
