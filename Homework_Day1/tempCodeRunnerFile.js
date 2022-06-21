/*Write a function that takes an array of users that satisfy the following requirement.
Use array map make an array of the names in <h1></h1> and the ages in <h2></h2>.*/

const users = [
  { name: "Angelina Jolie", age: 8 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 },
];

function problem1(arr) {
  if (!Array.isArray(arr)) return false;

  let res = arr.map((users) => {
    return `<div><h1>${users.name}</h1><h2>${users.age}</h2></div>`;
  });

  return res;
}
console.log(problem1(users));
