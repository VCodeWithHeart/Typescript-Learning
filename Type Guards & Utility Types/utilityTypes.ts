// Partial, Required, Readonly, Pick, Omit, Record

// there are two ways to make things readonly

// if you want to make any specific property readonly then

// interface Bank {
//   accountNumber: number;
//   bankName: string;
//   readonly ifsc: string;
// }

// const myBankAcc: Readonly<Bank> = {
//   accountNumber: 123456789,
//   bankName: "SBI",
//   ifsc: "SBIP0TS",
// };

// myBankAcc.ifsc = "sf"

// If you want to make any particular object or class readonly then

interface Bank {
  accountNumber: number;
  bankName: string;
  ifsc: string;
}

const myBankAcc: Readonly<Bank> = {
  accountNumber: 123456789,
  bankName: "SBI",
  ifsc: "SBIP0TS",
};

// myBankAcc.ifsc = "Svdv"; // Cannot change the readonly interface

interface DeviceParts {
  ram: string;
  rom: string;
  display: string;
  graphicsCard: string;
  keyboard: boolean;
  mouse: boolean;
}

// it makes properties optional
const smartPhone: Partial<DeviceParts> = {
  display: "6.5 inch",
  ram: "4 GB",
  rom: "64 GB",
};

// it makes all properties required
const personalComputer: Required<DeviceParts> = {
  display: "6.5 inch",
  ram: "4 GB",
  rom: "64 GB",
  mouse: true,
  keyboard: true,
  graphicsCard: "RTX 4050",
};

interface Entertainment {
  title: string;
  desc: string;
  cast: string[];
  imdb: number;
  releaseYear: number;
  isSuccess: boolean;
  isTRPGood: boolean;
  noOfEpisodes: number;
  isStillRunning: boolean;
  genre: string;
}

// Pick (Allows us to select specific properties)

type entertainmentKeys = keyof Entertainment;

// Exclude takes the union has the argument

const dhoom: Pick<
  Entertainment,
  Exclude<entertainmentKeys, "isStillRunning" | "noOfEpisodes" | "isTRPGood">
> = {
  title: "Dhoom",
  releaseYear: 2000,
  desc: "A motorbike criminal does multiple robbery in streets of mumbai, will the cops be able to catch him",
  cast: ["Abhishek Bachhan", "John Abraham", "Isha Deol"],
  imdb: 7.9,
  isSuccess: true,
  genre: "Thriller",
};

// Omit (Allows us to omit specific properties)

const kulfiKumarBajewala: Omit<Entertainment, "releaseYear" | "imdb"> = {
  title: "Dhoom",
  desc: "A motorbike criminal does multiple robbery in streets of mumbai, will the cops be able to catch him",
  cast: ["Abhishek Bachhan", "John Abraham", "Isha Deol"],
  isSuccess: true,
  genre: "Thriller",
  isTRPGood: true,
  noOfEpisodes: 537,
  isStillRunning: false,
};

// Record is a way to define objects where we can decide the keys and value types

type Permission = "add" | "edit" | "delete";

const permissions: Record<string, boolean> = {
  add: true,
  edit: true,
  delete: false,
};

const prices: Record<string, number> = {
  Shirt: 500,
  Jeans: 1200,
  Shoes: 2000,
};
