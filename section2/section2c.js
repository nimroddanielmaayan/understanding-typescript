/* Function return values */
// Inferred return type
function add(n1, n2) {
    return n1.toString() + n2.toString();
}
add(1, 2);
// Declared return type: "void"
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(5, 12));
