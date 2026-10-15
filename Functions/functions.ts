// functions

function add(a: number, b: number, cb: (result: number) => void): number {
  const result = a + b;
  cb(result);
  return result;
}

add(5, 3, (sum) => {
  console.log(sum); // Logs 8
});

// default parameters and optional parameters

function greet(
  name: string,
  greeting: string = "Hello",
  intro?: string,
): string {
  if (intro) {
    return `${intro} ${greeting}, ${name}!`;
  }
  return `${greeting}, ${name}!`;
}

// console.log(greet("Alice")); // Hello, Alice!
// console.log(greet("Bob", "Hi"));
// console.log(greet("Charlie", "Hey", "Good morning"));

// rest parameters

// function sum(...numbers: number[]): number {
//   return numbers.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(sum(1, 2, 3, 4, 5)); // Logs 15

function takeArgs(...anyArgs: unknown[]): void {
  if (anyArgs.length === 0) {
    console.log("No arguments provided.");
  }

  anyArgs.forEach((arg, index) => {
    if (typeof arg === "string") {
      console.log(`Argument ${index + 1} is a string: ${arg}`);
    } else if (typeof arg === "number") {
      console.log(`Argument ${index + 1} is a number: ${arg}`);
    }
  });
}

// takeArgs("Hello", 42, true, "World", 3.14);

// function overloading

// function overloading allows you to define multiple function signatures for a single function implementation. This is useful when you want to provide different ways to call a function based on the types or number of arguments.

function abcd(a: string): void;
function abcd(a: number, b: number): void;

function abcd(a: string | number, b?: number): void {
  if (typeof a === "string") {
    console.log(`Called with a string: ${a}`);
  } else if (typeof a === "number" && typeof b === "number") {
    console.log(`Called with two numbers: ${a} and ${b}`);
  }
}

// abcd("Hello"); // Called with a string: Hello
// abcd(5, 10); // Called with two numbers: 5 and 10
