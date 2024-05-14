// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance (object), returns first match, if no match - undefined

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "the boss" },
  { name: "anna", age: 35, position: "intern" },
];

const fruits = ["orange", "mango", "lemon"];
// filter
const youngPeople = people.filter((person) => person.age <= 25);
console.log(youngPeople);
const developers = people.filter((person) => person.position === "developer");
console.log(developers);
// no match
const seniorDevs = people.filter((person) => person.position === "seniorDevs");
console.log(seniorDevs); // returns []
// find
const peter = people.find((person) => person.name === "peter");
console.log(peter);
const fruit = fruits.find((fruit) => fruit === "lemon");
console.log(fruit);
// no match
const oldPeople = people.find((person) => person > 35);
console.log(oldPeople); // returns undefined
// multiple matches - first match
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson);

const anna = people.filter((person) => person.name === "anna");
console.log(peter.position); // find()
console.log(anna);
console.log(anna[0].position); // filter()
