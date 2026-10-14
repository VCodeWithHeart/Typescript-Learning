"use strict";
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
    title;
    author;
    price;
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
}
let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 10);
console.log(book1.title); // Accessible
// console.log(book1.author); // Not accessible, will throw an error
// console.log(book1.price); // Not accessible, will throw an error
class EBook extends Book {
    fileSize;
    constructor(title, author, price, fileSize) {
        super(title, author, price);
        this.fileSize = fileSize;
    }
    showAuthor() {
        // console.log(this.author); // ❌ Error
    }
}
let ebook1 = new EBook("1984", "George Orwell", 15, 2);
// console.log(ebook1.title);
// console.log(ebook1.fileSize);
class AudioBook extends EBook {
    duration;
    constructor(title, author, price, duration) {
        super(title, author, price, 0);
        this.duration = duration;
    }
    viewPrice() {
        console.log(this.price); // Accessible because price is protected
    }
}
let audiobook1 = new AudioBook("To Kill a Mockingbird", "Harper Lee", 20, 5);
audiobook1.viewPrice(); // Accessible because price is protected
