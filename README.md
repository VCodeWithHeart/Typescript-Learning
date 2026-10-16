# TypeScript Learning

> A hands-on course notebook for learning TypeScript, one example at a time.

![TypeScript](https://img.shields.io/badge/TypeScript-learning-blue?logo=typescript&logoColor=white)
![Status](https://img.shields.io/badge/status-in%20progress-orange)

This repository collects small examples and practice code from a TypeScript course. Read a lesson, try changing the types, and use the compiler to see what TypeScript catches.

## Learning path

| Lesson | What I practiced |
| --- | --- |
| [Basic Types](./Basic%20Types/basicTypes.ts) | Primitive and reference values, arrays, tuples, enums, and `any`, `unknown`, `void`, `null`, `undefined`, and `never`. |
| [Type Inference and Annotations](./Type%20Inference%20and%20Annotations/inferenceAndAnnotations.ts) | Letting TypeScript infer types and annotating variables, function parameters, and return values. |
| [Unions and Intersections](./Unions%20and%20Intersections/unionsAndIntersections.ts) | Union and intersection types, plus how interfaces and type aliases behave when declared more than once. |
| [Interfaces and Type Aliases](./Interfaces%20and%20Type%20Aliases/interfacesAndTypeAliases.ts) | Describing object shapes, optional properties, extending and merging interfaces, and creating reusable type aliases. |
| [Functions](./Functions/functions.ts) | Typed parameters and return values, callbacks, optional and default parameters, rest parameters, and overloads. |
| [Classes and Objects](./Classes%20and%20Objects/classes.ts) | Classes, constructors, parameter properties, inheritance, access modifiers, `readonly`, getters and setters, static members, and abstract classes. |
| [Generics](./Generics/generics.ts) | Reusable generic functions, interfaces, and classes, with type arguments that can also be inferred. |
| [Type Assertions](./Type%20Assertion/typeAssertion.ts) | Assertions, converting values between types, and safely handling a possibly missing DOM element. |
| [Type Guards and Utility Types](./Type%20Guards%20%26%20Utility%20Types/typeGuard.ts) · [Utility types](./Type%20Guards%20%26%20Utility%20Types/utilityTypes.ts) | Narrowing types with `typeof` and `instanceof`; shaping types with `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`, `keyof`, and `Exclude`. |
| [Modules](./Modules/payment.ts) | Exporting and importing functions between files. See the imports in [app.ts](./app.ts). |

## Quick recap

```ts
type Status = "pending" | "approved";

interface User {
  name: string;
  age?: number;
}

function greet(user: User): string {
  return `Hello, ${user.name}`;
}

type UserKeys = keyof User;
type UserWithoutAge = Omit<User, "age">;
type UserNameOnly = Pick<User, "name">;
```

- Use **`keyof T`** to get a union of an object's property names.
- Use **`Pick<T, Keys>`** to keep selected properties.
- Use **`Omit<T, Keys>`** to remove selected properties.
- To pick every key except a few, use **`Pick<T, Exclude<keyof T, KeysToRemove>>`**.
- Prefer **`unknown`** over `any` when a value's type is not known; narrow it before using it.

## Get started

Install the development dependency:

```bash
npm install
```

Check the TypeScript files for type errors:

```bash
npx tsc --noEmit
```

To compile and run the small starter program:

```bash
npx tsc app.ts --target ES2020 --module commonjs --outDir dist
node dist/app.js
```

The lesson files are practice notes, not all standalone applications. For example, `basicTypes.ts` ends with a deliberate thrown error to demonstrate `never`. TypeScript checks types during development and compilation; values from untrusted sources still need runtime validation.
