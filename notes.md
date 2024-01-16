# Understanding Typescript

## Course Sections

### Section 1 - Intro

- This project is based on the Udemy course `Understanding Typescript`

- `TS` is never executed directly. Only `JS` is executed, so `TS` must be
  compiled to `JS` to be executed

- `TS` doesn't have any effect in the runtime - only in development

- `TS` knows more types than `JS` and can catch more errors

- `Inferrence` VS `declaration`: `TS` can infer the type of a variable from its
  value, or it can be declared explicitly. Usually, there's no need to declare
  the type of a variable explicitly

- The console command to compile `TS` to `JS` is `tsc`. For example:

```bash
tsc app.ts
```

- `lite-server` is a basic npm package for developing TS projects. It features
  automatic reloading of the browser when a file is changed

### Section 2 - Basics

- `TS` has core types and also custom (user-defined) types

- Core types include:

  - `number`: Includes all number types
  - `string`: Includes template literals (backticks)
  - `boolean`: NOT including `truthy` and `falsy`
  - `object`: Object types are key-type pairs, as opposed to objects which are
    key-value pairs. Object types can be defined by inferrence or explicitly
    using {}. Explicitly defining object types is not common
  - `Array` If possible, `TS` will try to infer the type of variables in the
    array. If not, the type can be declared explicitly using `[]` or
    `Array<type>`
  - `Tuple`: Don't exist in regular `JS`. They are fixed-length arrays with a
    fixed type for each element. Since they can't be inferred, they must be
    declared explicitly. For example: `[number, string]`. A `Tuple` will become
    a regular array in the compiled `JS`
  - `Enum`: Exist in other languages, but not in `JS`. They are a way of giving
    more friendly names to sets of numbered values. Similar to the concept of
    `arrays`, but with reverse roles (the key is the value and the value is the
    key). Enum keys are usually in uppercase, but that's not mandatory. The
    numbers can optionally be assigned custom values
  - `any`: The default, unspecified type. Should only be used when necessary
  - `union`:
  - `unknown` (complete later)
  - `never` (complete later)
  - `void` (complete later)

-
