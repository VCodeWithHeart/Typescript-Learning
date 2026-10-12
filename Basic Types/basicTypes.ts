// Basic Types
// Primitive types (number, string, boolean)
// Arrays
// Tuples
// Enums
// Any, Unknown, Void, Null, Undefined, Never

// Primitive and Reference

// Primitive

let a = 12;
let b = a;
b = b + 2;

console.log("a", a, "b", b);

// Reference

let e = [1, 2, 3, 4, 5];
let f = e;
f.pop(); // removes the last element from the array

console.log("e", e, "f", f);

// Primitive Data Types

// Number
let num: number = 42;

// String
let str: string = "Hello, TypeScript!";

// Boolean
let isActive: boolean = true;

// Reference Data Types

// Array
let numbers: number[] = [1, 2, 3, 4, 5];

let arr = [1, 2, 3, "Hey", "Hello", true, { name: "John", age: 30 }]; // not defined type, so it can be any type

// let arr2: number[] = [1, 2, 3, "Hola"]; // error because we defined the type as number[]

// Tuple
let tuple: [number, string, boolean] = [1, "Hello", true];

// let tuple2: [number, string] = [1, true]; // error because we defined the type as [number, string]

// Enum
// (enumeration) is a way to define a set of named constants. It can be used to represent a collection of related values, such as colors, directions, or states.
enum UserRole {
  SuperAdmin = "superadmin",
  Admin = "admin",
  User = "user",
  Guest = "guest",
}

enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
}

StatusCodes.OK; // 200

// Enums are used to define predefined values that can be used in the code. Enums can be numeric or string-based, and they provide a way to give meaningful names to these values, making the code more readable and maintainable.

// Any, Unknown, Void, Null, Undefined, Never

let anyValue: any = 42; // can be any type
anyValue = "Hello";

let unknownValue: unknown = 42; // can be any type, but we need to check the type before using it
if (typeof unknownValue === "number") {
  let numValue: number = unknownValue; // we can assign it to a number variable
}

// IMPORTANT: The difference between any and unknown is that any allows you to assign any value to it without type checking, while unknown requires you to perform type checking before using the value. This makes unknown a safer option when dealing with values of uncertain types.

// for ex:
let vari: any = 12;
// vari = "hello";
vari.toUpperCase(); // no error, but it will throw an error at runtime because vari is a number

let vari2: unknown = 12;
// vari2 = "hello";

// vari2.toUpperCase(); // error because we don't know the type of vari2, so we can't call toUpperCase() on it

if (typeof vari2 === "string") {
  vari2.toUpperCase(); // no error because we've checked the type
}

// Void
// Void is a type that represents the absence of a value. It is often used as the return type of functions that do not return a value.

function logMessage(message: string): void {
  // the function doesn't return anything (void = absence of a value)
  console.log(message);
}

// Null
// Null is a type that represents the intentional absence of any object value. It is often used to indicate that a variable has no value or that a function does not return a value.

let nullValue = null; // typescript infers the null as any as it can be assigned to any type
let nullValue2: null = null; // explicitly defined as null

// Undefined
// Undefined is a type that represents the absence of a value. It is often used to indicate that a variable has not been assigned a value or that a function does not return a value.
let undefinedValue: undefined = undefined; // explicitly defined as undefined
let undefinedValue2; // typescript infers the undefined as any as it can be assigned to any type

// Never
// Never is a type that represents the absence of a value. It is often used to indicate that a function does not return a value or that a variable has no value.

function throwError(message: string): never {
  throw new Error(message); // the function doesn't return anything (never = absence of a value)
}

throwError("This is an error message"); // the function will throw an error and never return a value
console.log("This line will never be executed"); // this line will never be executed because the function above throws an error and never returns a value

// IMPORTANT: The difference between void and never is that void represents the absence of a value, while never represents the absence of a value and the fact that a function will never return a value. A function that returns never will always throw an error or terminate the program, while a function that returns void may or may not return a value.
