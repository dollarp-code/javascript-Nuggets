// Rest Operator...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear'];
const [first, second, ...restOfTheFruits] = fruits;

console.log(first, restOfTheFruits);

const specificFruits = restOfTheFruits.find((fruit) => fruit === 'lemon');
console.log(specificFruits);

// objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };

const { job, ...rest } = person;
console.log(job, rest);

// functions
const getAverage = (person, ...scores) => {
  console.log(person);
  console.log(scores);
  const average =
    scores.reduce((acc, cur) => {
      return (acc += cur);
    }, 0) / scores.length;
  console.log(average);
};

// getAverage(person.name, 67, 78, 89, 78);

const testScores = [67, 78, 99, 100];
getAverage(person.name, ...testScores);
