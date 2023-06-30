
const langs = ["Python","C++","Java","PHP"];

console.log(langs[0],langs[1],langs[2],langs[3]);

// Spread Operator
console.log(...langs);

const langs2 = ["Javascript","C#", ...langs];

console.log(langs2);
// output : ['Javascript', 'C#', 'Python', 'C++', 'Java', 'PHP']

const numbers = [1,2,3,4,5,6,7,8,9];

const [a,b, ...numbers2] = numbers;

console.log(a,b); // 1 2

console.log(numbers2); // [3, 4, 5, 6, 7, 8, 9]



const addNumbers = (a,b,c) => console.log(a+b+c);

const numbers3 = [100,200,300];

addNumbers(...numbers3); // output : 600
