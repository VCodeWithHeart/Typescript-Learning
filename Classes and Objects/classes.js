"use strict";
class BottleMaker {
    brand;
    capacity;
    price;
    constructor(brand, capacity, price) {
        this.brand = brand;
        this.capacity = capacity;
        this.price = price;
    }
}
let bottle1 = new BottleMaker("Milton", 500, 1200);
console.log(bottle1);
