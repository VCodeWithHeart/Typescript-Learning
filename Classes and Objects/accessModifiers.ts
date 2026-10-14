// EXAMPLE 1

// class BottleMaker {
//   constructor(public name: string) {}
// }

// const b1 = new BottleMaker("Milton");
// b1.name = "Cello"; // we can do this
// console.log(b1);

// EXAMPLE 2

// class BottleMaker {
//   constructor(private name: string) {}
// }

// const b1 = new BottleMaker("Milton");
// // b1.name = "Cello"; // we cannot do this anymore
// console.log(b1);

// Access Modifiers
// public - accessible from anywhere
// private - accessible only within the class
// protected - accessible within the class and its subclasses

class Book {
  constructor(
    public title: string,
    private author: string,
    protected price: number,
  ) {}
}

let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 10);
console.log(book1.title); // Accessible
// console.log(book1.author); // Not accessible, will throw an error
// console.log(book1.price); // Not accessible, will throw an error

class EBook extends Book {
  constructor(
    title: string,
    author: string,
    price: number,
    public fileSize: number,
  ) {
    super(title, author, price);
  }

  showAuthor() {
    // console.log(this.author); // ❌ Error
  }
}

let ebook1 = new EBook("1984", "George Orwell", 15, 2);
// console.log(ebook1.title);
// console.log(ebook1.fileSize);

class AudioBook extends EBook {
  constructor(
    title: string,
    author: string,
    price: number,
    public duration: number,
  ) {
    super(title, author, price, 0);
  }

  viewPrice() {
    console.log(this.price); // Accessible because price is protected
  }
}

let audiobook1 = new AudioBook("To Kill a Mockingbird", "Harper Lee", 20, 5);
audiobook1.viewPrice(); // Accessible because price is protected

// readonly - can only be assigned during initialization or in the constructor

class ReadOnlyBook {
  public readonly id: number = Math.floor(Math.random() * 1000);
  constructor(
    public readonly title: string,
    public readonly author: string,
    public readonly price: number,
  ) {}

  changeDetails(newTitle: string, newAuthor: string, newPrice: number) {
    // this.title = newTitle; // ❌ Error: Cannot assign to 'title' because it is a read-only property
    // this.author = newAuthor; // ❌ Error: Cannot assign to 'author' because it is a read-only property
    // this.price = newPrice; // ❌ Error: Cannot assign to 'price' because it is a read-only property
  }
}

let readOnlyBook1 = new ReadOnlyBook(
  "The Catcher in the Rye",
  "J.D. Salinger",
  12,
);

// readOnlyBook1.title = "New Title"; // ❌ Error: Cannot assign to 'title' because it is a read-only property

console.log(readOnlyBook1.id); // Accessible
console.log(readOnlyBook1.title); // Accessible
