/* Function return values */

// Inferred return type

function add(n1: number, n2: string) {
  return n1.toString() + n2.toString();
}

add(1, 2);

// Declared return type: "void"

function printResult(num: number): void {
  console.log('Result: ' + num);
}

printResult(add(5, 12));
