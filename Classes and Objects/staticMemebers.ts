class Calculator {
  static PI: number = 3.14159;

  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }

  static changePI(newValue: number): void {
    Calculator.PI = newValue;
  }
}

// console.log(Calculator.add(5, 3)); // 8
// console.log(Calculator.subtract(5, 3)); // 2

console.log(Calculator.PI); // 3.14159

Calculator.changePI(3.14);
console.log(Calculator.PI); // 3.14

// We can use the static methods without creating an instance of the class.
