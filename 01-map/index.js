"strict";

// MAP Method
const people = [
  {
    name: "bob",
    age: 20,
    position: "developer",
  },
  {
    name: "anna",
    age: 25,
    position: "designer",
  },
  {
    name: "susy",
    age: 30,
    position: "the boss",
  },
  {
    name: "john",
    age: 26,
    position: "intern",
  },
];
// returns a new array
// does not change the size of the original array (unlike filter)
// uses values from original array when making new one

const ages = people.map((person) => person.age * 2);
console.log(ages);

const newPeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});

console.log(newPeople);

const names = people.map((person) => `<h2>${person.name}</h2>`);
const result = document.querySelector("#result");

result.innerHTML = names.join("");
