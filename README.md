# TypeScript Learning

> A hands-on space for learning TypeScript, one concept at a time.

![TypeScript](https://img.shields.io/badge/TypeScript-learning-blue?logo=typescript&logoColor=white)
![Status](https://img.shields.io/badge/status-in%20progress-orange)

This repository contains small, focused examples for exploring TypeScript fundamentals. Read through the examples, run the compiler, and change the code to see how TypeScript's type system helps catch mistakes before runtime.

## Contents

- [What's inside](#whats-inside)
- [Getting started](#getting-started)
- [Type-check the examples](#type-check-the-examples)
- [Run the starter app](#run-the-starter-app)
- [Learning approach](#learning-approach)

## What's inside

| Path | What you'll find |
| --- | --- |
| [`app.ts`](./app.ts) | A tiny starter program to edit and run. |
| [`Basic Types/basicTypes.ts`](./Basic%20Types/basicTypes.ts) | Examples of primitives, arrays, tuples, enums, `any`, `unknown`, `void`, `null`, `undefined`, and `never`. |
| [`tsconfig.json`](./tsconfig.json) | TypeScript compiler configuration, including strict type-checking options. |

The lessons are intentionally kept close to the code so you can experiment as you read.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) with npm

### Install

Clone the repository and install its development dependencies:

```bash
git clone https://github.com/VCodeWithHeart/Typescript-Learning.git
cd Typescript-Learning
npm install
```

## Type-check the examples

Run the TypeScript compiler in check-only mode:

```bash
npx tsc --noEmit
```

The project uses strict type-checking settings to make type-related behavior easier to explore.

## Run the starter app

Compile `app.ts` to JavaScript, then run the generated file with Node.js:

```bash
npx tsc app.ts --target ES2020 --module commonjs --outDir dist
node dist/app.js
```

The `Basic Types` file is a lesson rather than a clean-running app: its final example deliberately throws an error to demonstrate the `never` type. If you run that example, expect execution to stop at that point.

## Learning approach

1. Open a lesson and read its examples and notes.
2. Make a small change or add your own example.
3. Run `npx tsc --noEmit` and inspect any compiler feedback.
4. Run the code when appropriate and compare compile-time checks with runtime behavior.

TypeScript is a superset of JavaScript that adds static types. Types are checked during development and compilation; they do not replace runtime validation for untrusted input.
