// Interfaces and Type Aliases

function greet(name: string, age: number): string {
  return `Hello, ${name}! You are ${age} years old.`;
}

// In the above function, we have used type annotations for the parameters 'name' and 'age' as string and number respectively, So when we do like name. then typescript automatically suggests the available methods and properties for the string type, and similarly for the number type.

// But this doesn't work for the below function as the typescript doesn't know what type of data is being passed to the function. So we can use interfaces and type aliases to define the shape of the data being passed to the function.

// function greetPerson(person): string {
//   return `Hello, ${person.name}! You are ${person.age} years old.`;
// }

// typescript doesn't know if the person object has name and age properties.

interface Person {
  name: string;
  age: number;
  gender?: string; // Optional property
}

function greetPerson(person: Person): string {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}

// greetPerson({ name: "Alice"}); // This will throw an error as the object passed doesn't match the Person interface
greetPerson({ name: "Alice", age: 30 }); // This works fine as the object passed matches the Person interface
greetPerson({ name: "Bob", age: 25, gender: "Male" }); // This also works fine with the optional gender property

// Extending Interfaces

interface Employee extends Person {
  employeeId: number;
}

function greetEmployee(employee: Employee): string {
  return `Hello, ${employee.name}! You are ${employee.age} years old and your employee ID is ${employee.employeeId}.`;
}

greetEmployee({ name: "Charlie", age: 28, employeeId: 12345 }); // This works fine as the object passed matches the Employee interface

// Two interface of same name are merged to make a single interface

interface Movie {
  title: string;
}

interface Movie {
  desc: string;
}

const movieData: Movie = {
  title: "Oz The Great",
  desc: "Oz a powerful magican, reached the city of OZ",
};

// Type Aliases

// type sankhya = number;
// let num: sankhya = 12;

type value = number | string | boolean;

function abcd(params: value): value {
  return params;
}
