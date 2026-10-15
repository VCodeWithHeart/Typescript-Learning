"use strict";
// functions
function add(a, b, cb) {
    const result = a + b;
    cb(result);
    return result;
}
add(5, 3, (sum) => {
    console.log(sum); // Logs 8
});
// default parameters and optional parameters
function greet(name, greeting = "Hello", intro) {
    if (intro) {
        return `${intro} ${greeting}, ${name}!`;
    }
    return `${greeting}, ${name}!`;
}
console.log(greet("Alice")); // Hello, Alice!
console.log(greet("Bob", "Hi"));
console.log(greet("Charlie", "Hey", "Good morning"));
// rest parameters
// function sum(...numbers: number[]): number {
//   return numbers.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(sum(1, 2, 3, 4, 5)); // Logs 15
function takeArgs(...anyArgs) {
    if (anyArgs.length === 0) {
        console.log("No arguments provided.");
    }
    anyArgs.forEach((arg, index) => {
        if (typeof arg === "string") {
            console.log(`Argument ${index + 1} is a string: ${arg}`);
        }
        else if (typeof arg === "number") {
            console.log(`Argument ${index + 1} is a number: ${arg}`);
        }
    });
}
takeArgs("Hello", 42, true, "World", 3.14);
