const person1 = {
  name: 'Todd',
  age: 27,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};

console.log(person1.name);

const person2: string[] = ['Todd', 27];

for (const info of person2) {
  console.log(info);
}

const person3: {
  name: string;
  age: number;
  hobbies: [string, string]; // tuple
} = {
  name: 'Daniel',
  age: 32,
  hobbies: ['Sports', 'Cooking'],
};

console.log(person3.hobbies[0]);
