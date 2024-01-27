var person1 = {
    name: 'Todd',
    age: 27,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
};
console.log(person1.name);
var person2 = ['Todd', 27];
for (var _i = 0, person2_1 = person2; _i < person2_1.length; _i++) {
    var info = person2_1[_i];
    console.log(info);
}
var person3 = {
    name: 'Daniel',
    age: 32,
    hobbies: ['Sports', 'Cooking'],
};
console.log(person3.hobbies[0]);
// TS union types
// A function that combines 2 variables that can be number or string
function combine(input1, input2) {
    var result = input1 + input2;
    console.log(result);
}
combine(1, 2);
