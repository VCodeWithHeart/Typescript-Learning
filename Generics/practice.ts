// Question 1 — Generic Function
// Create a generic function called getFirstItem that:
// - Accepts an array of items of any type.
// - Returns the first item from that array.
// - Uses generics instead of using any.
// Expected behavior:
// getFirstItem<number>([10, 20, 30]);
// // Expected return: 10

// getFirstItem<string>(["Apple", "Mango", "Banana"]);
// // Expected return: "Apple"

// Your task is to write the function's TypeScript code.
// Think about these two questions:
// 1. What should the generic type parameter represent: the array itself or the type of each item?
// 2. What should the function's return type be?
// Hint: You will need a type parameter, an array type, and a return type that uses the same type parameter.

const getFirstItem = <T>(arr: T[]): T | undefined => {
  return arr[0];
};

console.log(getFirstItem<number>([10, 20, 30]));

console.log(getFirstItem<string>(["Apple", "Mango", "Banana"]));

// Question 2: Create a generic function called wrapInArray.
// It should accept a single value of any type and return that value inside an array.
// Expected behavior:
// wrapInArray<number>(10);
// // [10]

// wrapInArray<string>("Hello");
// // ["Hello"]

// wrapInArray<boolean>(true);
// // [true]

// Requirements: use generics, don't use any, and specify the correct return type.
// Your challenge: Write the function yourself. You can also try calling it without explicitly supplying the type argument to see whether TypeScript infers T automatically.

const wrapInArray = <T>(val: T): T[] => {
  return [val];
};

// console.log(
//   "wrapInArray<number>(10),",
//   wrapInArray<number>(10),
//   "wrapInArray<string>('Hello'),",
//   wrapInArray<string>("Hello"),
//   "wrapInArray<boolean>(true),",
//   wrapInArray<boolean>(true),
// );


// Question 3 — Generic constraints
// Now let's learn an important feature: constraining generics.
// Create a function called getProperty that accepts an object and one of its property keys, then returns the corresponding property value.
// For example:
// const user = {
//   name: "Rahul",
//   age: 25,
//   isDeveloper: true,
// };

// getProperty(user, "name");        // "Rahul"
// getProperty(user, "age");         // 25
// getProperty(user, "isDeveloper"); // true


// Your function must satisfy these requirements:
// 1. Use generics, not any.
// 2. Allow different objects and property types.
// 3. Return the correct type for whichever property key is supplied.
// 4. Prevent invalid keys, such as getProperty(user, "salary"), from compiling.
// Hint: You'll need two generic type parameters this time. One represents the object, and the other represents a key constrained by that object.
// Write your solution, and I'll review it before we move on to generic interfaces and classes.

const user = {
  name: "Rahul",
  age: 25,
  isDeveloper: true,
};

function getProperty <T, K extends keyof T>(obj: T, key: K)  {
    return obj[key as keyof T];
}

// the below one also works (but above one is the best solution for this question)
// type UserKeys = keyof typeof user // this works like the below one
// type UserKeys = "name" | "age" | "isDeveloper"

// function getProperty <T >(obj: T, key: UserKeys)  {
//     return obj[key as keyof T];
// }

getProperty(user, "isDeveloper")
// getProperty(user, "isDev") // will throw error because isDev not exists in the user obj