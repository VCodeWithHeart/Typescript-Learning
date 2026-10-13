// Union example

type Status = "pending" | "approved" | "rejected";

function checkStatus(status: Status): string {
  switch (status) {
    case "pending":
      return "Status is pending";
    case "approved":
      return "Status is approved";
    case "rejected":
      return "Status is rejected";
  }
}

// Intersection example

type User = {
  name: string;
  age: number;
  email: string;
};

type Admin = User & {
  getDetails: (user: string) => void;
};

// Difference between types and interfaces

// when we do like the below the interface merges the two interfaces to make a single interface, but in case of types it will throw an error as the type is already defined.

interface Star {
  intensity: number;
}

interface Star {
  color: string;
}

// the above two interfaces will be merged to make a single interface with both properties intensity and color.

type Planet = {
  size: number;
};

// type Planet = {
//   color: string;
// };

// the above two types will throw an error as the type is already defined.
