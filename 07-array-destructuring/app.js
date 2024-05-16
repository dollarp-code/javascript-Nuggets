// faster/easier way to access/unpack variables from arrays

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

const [orange, banana, lemon] = fruits;
console.log(orange, banana, lemon);

const [john, peter, bob, anna, kelly, susan] = friends;
console.log(john, peter, bob, anna, kelly, susan);

const { 1: a } = fruits;
console.log(a);

// Swap Variables

let first = 'bob';
let second = 'john';

// let temp = second;
// second = first;
// first = temp;

[first, second] = [second, first];
console.log(first, second);
