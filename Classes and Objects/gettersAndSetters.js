"use strict";
// class Person {
//   public name;
//   public age;
//   public gender;
//   constructor(name: string, age: number, gender?: string) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }
// Parameter properties
// we don't need to declare the properties separately (like above example), we can declare them directly in the constructor parameters then they are known as parameter properties. We can use access modifiers to declare the properties directly in the constructor parameters. (as you can see in the below example)
class Person {
    name;
    age;
    gender;
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
let person1 = new Person("John", 30); // gender is optional
console.log(person1);
// Getters and Setters
class Employee {
    _salary;
    constructor(_salary) {
        this._salary = _salary;
    }
    get salary() {
        return this._salary;
    }
    getSalary() {
        return this._salary;
    }
    set salary(value) {
        if (value < 0) {
            throw new Error("Salary cannot be negative");
        }
        this._salary = value;
    }
    setSalary(value) {
        if (value < 0) {
            throw new Error("Salary cannot be negative");
        }
        this._salary = value;
    }
}
let employee1 = new Employee(50000);
// getter
console.log(employee1.salary); // 50000
console.log(employee1.getSalary()); // 50000
// setter
// employee1.salary = 60000;
employee1.setSalary(60000);
console.log(employee1.salary); // 60000
