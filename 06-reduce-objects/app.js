// Reduce - Objects
// cart example
const cart = [
  {
    title: "Samsung Galaxy S7",
    price: 599.99,
    amount: 1,
  },
  {
    title: "google pixel ",
    price: 499.99,
    amount: 2,
  },
  {
    title: "Xiaomi Redmi Note 2",
    price: 699.99,
    amount: 4,
  },
  {
    title: "Xiaomi Redmi Note 5",
    price: 399.99,
    amount: 3,
  },
];

let total = cart.reduce(
  (total, cartItem) => {
    return total;
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
);

console.log(total);

const { 6: a } = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a);
console.log(test);
const test = 2;
