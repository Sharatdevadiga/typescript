var dog = {
    name: "rockey",
    breed: "bull dog",
    age: 0.5,
};
function printName(person) {
    console.log("Hello ".concat(person.first, "- ").concat(person.last));
}
printName({ first: "Thomas", last: "Tommy" });
// OBJECT TYPE TO THE VARIABLE
var coordinate = { x: 24, y: 25 };
// OBJECT TYPE -> RETURNING FROMT HE FUNCTION
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
printName({ first: "Mick", last: "jagger" });
var singer = { first: "Mick", last: "jagger", age: 23 };
printName(singer);
var coordinate2 = { x: 10, y: 10 };
function randomCoordinate2() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
var age = 20;
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "song 1",
    artist: "artist1",
    numStreams: 121212,
    credits: {
        producer: "Phil",
        writer: "Alex North",
    },
};
var earnings = calculatePayout(mySong);
printSong(mySong);
console.log(earnings);
