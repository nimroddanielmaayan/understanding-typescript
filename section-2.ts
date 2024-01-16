function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (showResult) {
    const sum = n1 + n2;
    console.log(phrase + sum);
  }
}

let number1: number;
number1 = '5';
number1 = '6';
number1 = 7;
const number2 = '2.8';
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);
