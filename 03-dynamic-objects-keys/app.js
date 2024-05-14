// dot notation
const person = {
  name: "Okikiola",
};
console.log(person.name);
person.age = 29;
console.log(person);

// square bracket notation

const items = {
  "featured-items": ["item1", "item2"],
};

console.log(items["featured-items"]);
console.log(person["name"]);

let appState = "loading";
appState = "error";
const keyName = "computer";
const app = {
  [appState]: true,
};
app[keyName] = "apple";
console.log(app);

const state = {
  loading: true,
  name: "",
  job: "",
};

function updateState(key, value) {
  state[key] = value;
}

updateState("name", "raheem");
updateState("job", "footballer");
updateState("loading", false);
updateState("age", 25);
console.log(state);
