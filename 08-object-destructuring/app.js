// faster/easier way to access/unpack values from objects

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

const {
  first: firstName,
  last: lastName,
  city,
  siblings: { sister },
} = bob;

console.log(firstName, lastName, city, sister);
// const firstNames = bob['first'];
// const lastName = bob.last;
// const sister = bob.siblings.sister;

// console.log(firstNames);

function printPerson(person) {
  console.log(person.first);
}

printPerson(bob);
