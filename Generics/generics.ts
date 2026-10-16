// Generics

// We have to create a generic function that takes any type of value and prints it

function logger<T>(a: T) {
  console.log(a);
  return a;
}

const b = logger<string>("Hello, World!"); // Logs: Hello, World!
const a = logger<number>(42);

// Ex 2

function abcd<H>(a: H, b: string, c: number) {}

abcd<string>("halua", "pudi", 4);

function log<T>(val: T) {
  console.log(val);
}

log<string>("Hey");
log(12); // typescript infers the generic type from it's value

// Generic interface

interface Halua<T, K> {
  name: string;
  age: number;
  key: T;
  pair: K;
}

function myFunc(obj: Halua<string, number>){
    
}

myFunc({name: "Party", age: 12, key: "KEY-01", pair: 21})


// Generic classes

class PhoneMaker<T>{
    constructor(public key: T){

    }
}

let phone1 = new PhoneMaker("Lava")
console.log(phone1)


// scenario

function func<T>(paramsA: T, paramsB: T): T{
    let a = "hello" // string literal (literal - something which is written literally directly)
    return a as T // type assertion (forcefully setting the type)
}

func<string>("hey", "hello")