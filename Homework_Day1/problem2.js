const students = [
  { name: "Lan", gender: "female" },
  { name: "Linh", gender: "female" },
  { name: "Trung", gender: "male" },
  { name: "Peter", gender: "other" },
];

function problem2(arr) {
  if (!Array.isArray(arr)) return false;

  return arr.filter((item) => item.gender !== "female");
}

console.log(problem2(students));
