// Generic arrow function in .tsx needs a comma <T.>

const getRandomElement2 = <T,>(list: T[]): T => {
  const idx = Math.floor(Math.random() * list.length);
  return list[idx];
};
