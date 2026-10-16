// Type Assertion

interface Bag {
  storage: string;
  color: string;
  zips: number;
}

interface Basket extends Bag {
  material: string;
}

function getBasket(params: Basket): Bag {
  return params;
}

getBasket({ color: "red", storage: "30L", zips: 4, material: "Fabric" });

// Type Casting

let num: number = Number("12");

// Non null Type Assertion

// const button = document.querySelector("#submit")!;

// button.innerHTML = "Submit"; // ✅ No TypeScript error


const button = document.querySelector("#submit");

if (button) {
  button.innerHTML = "Submit";
}