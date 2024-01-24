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

- Adding an exclamation mark (`!`) after a variable name tells `TS` that the
  variable will never be `null` or `undefined`. This is called a
  `non-null assertion operator`. It's a way of telling `TS` that the developer
  knows more than `TS` about the variable

- `TS` has core types and also custom (user-defined) types

- `TS` Types include:

  - `string`: Also includes template literals (backticks)

  - `number`: Includes all number types (int, float, etc.)

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

  - `union`: A union is a type that can be one of several types. For example:
    `number | string`

  - `literal`: A value can also be a type. For example 0 or 'hello' can be
    types, that may only have those values. Is often combined with `union` to
    enforce a closed set of allowed options, for example: `0 | 1 | 2`

  - `function return types` and `void`: `TS` can infer the return type of a
    function, but it can also be declared explicitly, if there's a good reason
    to do that. `void` is the return type of a function that doesn't return
    anything. `void` doesn't exist in `JS`, it's parallel in `JS` is `undefined`

  - `undefined`: The type of a variable that can only be `undefined`. It's
    rarely used

  - `function`: Functions can be stored in variables (actually, a pointer is
    stored since functions in `JS` are objects). So, a variable can be of type
    `function` if it's meant to store a function

  - `function type`: A type that describes a function, including it's parameter
    types and return type. For callback functions, the return type is usually a
    `void`, because callback functions usually don't return anything

  - `unknown`: Similar to `any`, but a bit more restrictive. It's a type that
    can be anything, but it can't have a known inferred `TS` type (because then
    it would be known, or at least intended to be known). It's rarely used

  - `never`: A type that denotes a function that can never return anything (like
    a utility function that only generates a custom error and then exits). It's
    rarely used

  - `custom` (or `alias`) : It's possible to create custom types using the
    `type` keyword. A `custom` type's name should start with a capital letter,
    and it shouldn't be a reserverd word (like "Number"). A common use for
    `custom` is to name a `union` type, or a complex `object` type. This can
    help a lot in making the code more readable. It's similar to the concept of
    `data modeling` in backend development, but for `types`

### Section 3 - The TS Compiler

- The console command:

```bash
 tsc filename.ts --watch
```

will compile the `TS` file to `JS`, watch for changes in the `TS` file, and
recompile it when necessary

- Compiling the entire project: To initiate a new `TS` project, run:

```bash
tsc --init
```

This will create a `tsconfig.json` file, which is the configuration file for the
`TS` compiler. It can be used to specify the files to be compiled, the output
directory, the target `JS` version, etc. The `tsconfig.json` file can be used to
compile the entire project, instead of compiling each file individually. To do
that and also watch for changes, run:

```bash
tsc --watch
```

- It makes sense to add `"exclude": ["node_modules"]` to the `tsconfig.json`
  file, so that the `TS` compiler doesn't waste time trying to compile the
  `node_modules` folder. Not doing so might cause the compiler to crash. It's
  actually excluded by default if there's no `exclude` property in the
  `tsconfig.json` file, but it's better to be explicit

- Same principle concerning the `include` property. If there's no `include`
  property, the compiler will compile all files in the project. If there is an
  `include` property, only the files specified in it will be compiled

- Info about `tsconfig.json`:
  https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

- Some important `tsconfig.json` options:

  - `target`: The version of `JS` to compile to
  - `lib`: The `JS` libraries to include in the compilation, for example: `dom`,
    `es6`, `es2015`, etc. This might be important if we're working on a Node.js
    project, for example, and we don't want to include the `dom` library or
    other browser libraries
  - `allowJs`: Whether to allow `JS` files to be compiled\checked
  - `sourceMap`: Whether to generate `sourceMap` files. `sourceMap` files are
    used to map the compiled `JS` code to the original `TS` code. This is useful
    for debugging
  - `outDir`: The output directory for the compiled `JS` files
  - `rootDir`: The root directory for the `TS` files
  - `removeComments`: Whether to remove comments from the compiled `JS` files
  - `noEmitOnError`: Whether to prevent the compiler from generating `JS` files
    if there are errors in the `TS` files
  - `strict`: Whether to enable all strict type checking options

- The .js.map files are called `sourceMap` files. They are used to map the
  compiled `JS` code to the original `TS` code. This is useful for debugging

### Section 5 - Classes and Interfaces

- Remember that in `TS`, classes are a type of object, that can have methods.
  classes are use do create instances, which are also objects. The constructor
  method is automatically called when using the `new` syntax to instantiate a
  class

- The `constructor` method in a `JS` class is actually syntactic sugar for a
  more complex `constructor function` that is used behind the scenes

- `TS classes` are similar to `JS classes`, but with some differences:

  - `TS classes` can have `public`, `private` and `protected` properties and
    methods. `JS classes` can only have `public` properties and methods
  - `TS classes` can have `readonly` properties
  - `TS classes` can have `static` properties and methods
  - `TS classes` can have `abstract` properties and methods
  - `TS classes` can have `accessors` (getters and setters)
  - `TS classes` can have `parameter properties`
  - `TS classes` can have `index signatures`
  - `TS classes` can have `constructors`
  - `TS classes` can have `interfaces`
  - `TS classes` can have `generics`
  - `TS classes` can have `decorators`

- Type annotations in `TS classes` might be confusing, because they make the
  class look like an object.

- `interface` is a `TS` feature that doesn't exist in `JS`. It's a way of
  defining a `custom type`. It's similar to the concept of `data modeling` in
  backend development, but for `classes`

- An `interface` dosen't store any data or methods. It only defines the
  structure of an object. It can be used as the type of a variable, or as the
  type of a class

- Why use an `interface` and not a `custom type`? An `interface` is specifically
  built for `classess` in `OOP`. For example, the types defined in an
  `interface` are inherited by the `instances` of the `class`

- To use an `interface` in a `class`, the syntax is:
  `class ClassName implements InterfaceName`

- I skipped over most of the `class` refresher and most of the `interface` part,
  because I'm not sure if and when I'll work with `OOP`. If needed, go back to
  this in the future

### Section 6 - Advanced Types

- `inersection types`: A combination of two types. For example:
  `type SiteAdmin = User & Admin`

- `type guards`: This simply referrs to checking the type of a variable before
  using it. `type guards` can be implemented using `typeof`, `in` or
  `instanceof` (which are all `JS` features).

- `type guards` are based on `JS`, not on `TS` - because they have to work at
  runtime. And like we said before, `TS` disappears when compiling

### Section 11 - TS and Webpack

- I preferred to skip over this part, because I usually use `Vite` or similar
  build tools for `TS` projects.

- `Vite` actually uses `Webpack` under the hood

- If needed, I can go over this section in the future
