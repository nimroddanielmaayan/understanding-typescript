# Understanding Typescript

## Course Sections

### Section 1 - Intro

- This project is based on the Udemy course `Understanding Typescript`

- At it's core, `TS` is all about setting patterns and predicting outcomes

- `TS` is never executed directly. Only `JS` is executed, so `TS` must be
  compiled to `JS` to be executed

- `TS` doesn't have any effect in the runtime - only in development

- `TS` knows more types than `JS` and can catch more errors

- `Inferrence` VS `declaration`: `TS` can infer the type of a variable from its
  value, or it can be declared explicitly. Usually, there's no need to declare
  the type of a variable explicitly

- It's important to remember that `TS` might sometimes force us to do a lot of
  "type gymnastics" and to invest a lot of workin order to define the desired
  types correctly. When this happens, it's important to remember that `TS` is
  always optional and that we should decide how much of it is really needed and
  where

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

- `discriminated unions`: A way of using `union types` in a way that makes it
  easier to check the type of a variable using `type guards`. In other words,
  enabling discrimination before uniting `types` or `interfaces`. For example:
  Assigning a `union type` named "kind" to each `type` or `interface`, and then
  looping over this "kind" to decide what to do in each case

- `type casting`: A way of explicitly telling `TS` that a variable is of a
  certain type, even if `TS` can't infer it. This is needed in cases when `TS`
  can't infer the type of a variable by itself, but the developer does know the
  type

- There are 2 optional syntax options for `type casting` (it's recommended to
  choose one and stick to it in one project):

  - `Angle-bracket` syntax: `<type>variableName` (can't be used in `React`,
    because angle brackets in `React` are used for `components`)
  - `As` syntax: `variableName as type`

- `type casting` is not always needed - sometimes `TS` can infer the type of a
  variable by itself

- It's possible to use `type casting` not only when defining a variable, but
  also when using it. For example: `(variableName as type).methodName()`

- `index properties`: A way of defining a flexible `custom type` that can have
  any number of properties with any names, as long as they are of a certain
  type. For example: `interface NumbersContainer = { [prop: string]: number }`.
  This example means: An interface named "NumbersContainer" that can have any
  amount of properties with any name, as long as the property name is of type
  string and the property value is of type number. Just be careful not to
  confuse `prop` with `React props`

- It's possible to also add specific types to specific properties inside an
  `index property`, as long as there's no conflict between them

- `function overloads`: A way of defining multiple function type combination
  possibilitues, for the same function. The syntax is simply writing the same
  function name with only types, before the "real: function. For example:

```ts
// Function overload
function add(a: number, b: number): number;

// Function overload
function add(a: string, b: string): string;

// "Real" function
function add(a: number | string, b: number | string) {
  return a + b;
}
```

- `TS` sometimes displays types with `(+X overloads)` at the end. This means
  that there are X function overloads for this function

- `optional chaining`: A way of properties exists before using them. The syntax
  is: `variable?.property1?.property2`. Note, that this is not valid `JS`
  syntax, but behind the scenes it's compiled to an `if` statement.
  `optional chaining` is useful when working with `backend APIs`, because the
  data might not always be available at runtime

- `nullish coalescing`: A way of checking if a variable is `null` or `undefined`
  before using it. It works similarly to `optional chaining`, and it's also
  useful when working with `backend APIs`. The syntax is:
  `variable ?? defaultValue`. This is actually valid `JS` syntax, but at some
  point in the past it existed only in `TS`

### Section 7 - Generics

- `generics` are a way of creating `custom types` that are generally a "type of
  types". For example: An array of strings

- `generics` exist in order to make our lives easier - to give us the ability to
  create `custom types` which are both descriptive and flexible

- The possible syntax for `generics` is: `Array<type>`. For example:
  `Array<string>` (which is exactly the same as `string[]`)

- Just like with `type casting`, `generics` are not always needed - sometimes
  `TS` can infer the generic type of a variable by itself

- `generic functions` and `type variables`: A way of creating `functions` that
  can work with any `type`. For example: A function that receives an array of
  any type, and returns the first element of that array. The syntax is:
  `function functionName<T>(parameterName: T[]): T`. The letter `T` in this case
  is short for `type variable`. If there are several `type variables`, we can
  continue along the alphabet (to `U`, `V`, etc.). For example:

```ts
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
```

- In the above example, the first `<T>` is the "decleration" of the
  `type variable` of the function. The 2 other `T`s are then instances of that
  same `type variable` (one for the parameter and one for the return value)

- Why should we use `generic functions` and not just regular types inside the
  functions? Because then, `TS` will know more about the expected returned
  value. For example, a `generic function` that combines `object T` and
  `object U` , will return `object T & U`. A regular function that combines two
  objects will just return an object. In other words, `generics` provide
  consistency, like we said before. This can be especially important when
  working with complex functions or complex classes, for example

- `generic constraints`: What if `T` or `U` need to be of a certain type? In
  this case, we can use `generic constraints`, which implement the `extends`
  keyword to make the `type variable` even more specific. For example:

```ts
function combine<T extends object, U extends object>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 };
}
```

- The `keyof` keyword: A way of getting the keys of an object as a `union type`.
  For example: `keyof objectName`. This is useful when working with `generics`,
  because it can be used to make sure that a `type variable` is a key of an
  object. In the following example, `TS` will understand that `T` is an object
  and that `U` is the key of that object:

```ts
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}
```

- `generic classes`: A way of creating `classes` that can work with any `type`,
  but in which this `type` is uniform and consistent. For example: A class that
  receives an array of any type, and returns the first element of that array.
  The syntax is: `class ClassName<T>`. For example:

```ts
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}
```

- Note, that when instantiating a `generic class`, the `type variable`'s
  specific `type` must be specified (unless it can be inferred). For example:
  `const nameStorage = new DataStorage<string>()` or possibly
  `const numberStorage = new DataStorage<number>()`. This is called "setting the
  generic type"

- `generic utility types`: `TS` has some built-in `generic types` that can be
  used in `generics`. For example:
  - `Partial<T>`: A `generic type` that makes all properties of a variable
    optional and not required
  - `Readonly<T>`: A `generic type` that makes all properties of a variable
    readonly
  - `Record<K, T>`: A `generic type` that creates an object with keys of type
    "K" and values of type `T`
  - And many more

### Section 8 - Decorators

- `decorators` are a `TS` feature that doesn't exist in `JS`. They are a way of
  adding extra functionality to `classes`, `methods` and `properties`. They are
  similar to `decorators` in `Python` and `annotations` in `Java`

- `decorators` are a kind of "meta programming" tool - they are a way of
  modifying the general behavior of a `class`, `method` or `property` without
  changing the final code of that `class`, `method` or `property`

- You could say that when we're writing `decorators`, we're "developing for
  developers" and not "developing for users", because `decorators` are not meant
  to directly affect the end user's experience

- `decorators` are generally associated with `classes` and with `OOP`, but they
  can also be used with `functional programming` and with `React components`

- To use `decorators`, the `experimentalDecorators` option must be set to `true`
  in the `tsconfig.json` file (or something similar, if using a different
  compilation tool)

- `decorators` are simply functions that, like we said, "decorate" something
  with extra functionality. Their name should start with a capital letter, and
  they are associated with something using the `@` symbol. For example:

```ts
// Define a decorator, which recieves a constructor function
function JustLog(constructor: Function) {
  console.log('Logging...');
}

// Associate the decorator with a class
@JustLog
class Person {
  name = 'Someone';

  constructor() {
    console.log('Creating person object...');
  }
}
```

- It's important to know that a decorator is run when a class it's associated
  with is defined, not when it's instantiated

- `decorator factories`: A way of creating `decorators` that can receive
  arguments and be configured. The syntax is:
  `function decoratorName(args) { return function decoratorName(target) { ... } }`.
  For example:

```ts
// Define a decorator factory, which recieves a string
function JustLog(logText: string) {
  // Return a decorator, which recieves a constructor function
  return function (constructor: Function) {
    console.log(logText);
  };
}

// Associate the decorator with a class
@JustLog('Logging...')
class Person {
  name = 'Someone';

  constructor() {
    console.log('Creating person object...');
  }
}
```

- Note, that `@JustLog('Logging...')` is a function execution, written in a
  unique syntax that's used by `decorators`

- A note about using an underscore (`_`) as a parameter name in a decorator or
  decorator factory: It's a convention to do that, when the parameter is not
  actually used. This is because a parameter may sometimes be required by `TS`,
  even if it's not used

- It's interesting to note that the `Angular` and `Nest.js` frameworks use
  `decorators` extensively. They are both based on `TS`

- Multiple `decorators` can be associated with the same `class`, `method` or
  `property`. In this case, they are executed (called) from bottom to top in the
  code, but defined (initially created) from top to bottom in the code

- `property decorators`: A way of adding extra functionality to a `property`.
  They are similar to `decorators`, but they are associated with a `property`
  instead of a `class`. The syntax is:
  `function decoratorName(target: any, propertyName: string | Symbol) { ... }`.
  For example:

```ts
// Define a decorator, which recieves a constructor function
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator...');
  console.log(target, propertyName);
}

// Associate the decorator with a class
class Product {
  @Log
  title: string;
}
```

- `accessor decorators`: A way of adding extra functionality to a `getter` or a
  `setter`. They are similar to `decorators`, but they are associated with a
  `getter` or a `setter` instead of a `class`. The syntax is:
  `function decoratorName(target: any, propertyName: string | Symbol, descriptor: PropertyDescriptor) { ... }`.
  For example:

```ts
// Define a decorator, which recieves a constructor function
function Log(target: any, propertyName: string | Symbol) {
  console.log('Accessor decorator...');
  console.log(target, propertyName);
}

// Associate the decorator with a class
class Product {
  private _price: number;

  @Log
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  get price() {
    return this._price;
  }
}
```

- `parameter decorators`: A way of adding extra functionality to a `parameter`.
  They are similar to `decorators`, but they are associated with a `parameter`
  instead of a `class`. The syntax is:
  `function decoratorName(target: any, methodName: string | Symbol, position: number) { ... }`.
  For example:

```ts
// Define a decorator, which recieves a constructor function
function Log(target: any, methodName: string | Symbol, position: number) {
  console.log('Parameter decorator...');
  console.log(target, methodName, position);
}

// Associate the decorator with a class
class Product {
  private _price: number;

  setPrice(@Log price: number) {
    if (price > 0) {
      this._price = price;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }
}
```

- `decorators` are also able to return values, and then these values can be used
  in the code. For example, a `decorator` can even replace the original `class`
  with a new one

- Validation with `decorators`: A way of using `decorators` to validate
  `classes`, `methods` or `properties`. For example:

```ts
// Define a decorator factory, which recieves a string
function Required() {
  // Return a decorator, which recieves a constructor function
  return function (target: any, propertyName: string | Symbol) {
    // Get the value of the property
    const value = target[propertyName];

    // Check if the value is valid
    const isValid = value != null && value.toString().trim().length > 0;

    // Throw an error if the value is not valid
    if (!isValid) {
      throw new Error(`"${propertyName}" is required!`);
    }
  };
}

// Associate the decorator with a class
class Product {
  @Required()
  title: string;
}
```

- The NPM package `class-validator` for `TS` can be used to validate `classes`,
  `methods` or `properties` using `decorators`. It's a very popular package.
  It's a very good tool for doing `OOP` with `TS`

### Section 11 - TS and Webpack

- I preferred to skip over this part, because I usually use `Vite` or similar
  build tools for `TS` projects.

- `Vite` actually uses `Webpack` under the hood

- If needed, I can go over this section in the future
