// Inference and Annotations

let message = "Hello, TypeScript!"; // Type inference: message is inferred to be of type string
let age: number = 25; // Type annotation: age is explicitly declared to be of type number

// Type Annotation in a function

function greet(name: string): string {
  return `Hello, ${name}!`;
}

// As you can see in the above function, we have used type annotations for the parameter 'name' as sting and the return type of the function as string. This helps TypeScript to catch any type-related errors during development.
