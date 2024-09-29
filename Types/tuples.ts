const stuff4: (string | number)[] = ["a", "b", "c"];

// tuples are fixed in their length and fixed in type
const color: [number, number, number] = [1, 2, 3];
const stuff5: [number, string] = [3, "c"];
type HTTPResponse = [number, string];
const status2: HTTPResponse = [200, "ok"];
//limitaiton of tuple  -> can push and pop dispite of the fixed size type
status2.push(123);
status2.pop();

const responses: HTTPResponse[] = [[404, "page not found"]];
