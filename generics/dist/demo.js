"use strict";
// Generic arrow function in .tsx needs a comma <T.>
const getRandomElement2 = (list) => {
    const idx = Math.floor(Math.random() * list.length);
    return list[idx];
};
