// Abstract Classes and Methods

// Abstract classes are classes that cannot be instantiated directly. They are meant to be subclassed, and they can contain abstract methods that must be implemented by subclasses.

abstract class Shape {
  abstract area(): number; // Abstract method
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
