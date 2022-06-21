const obj = {
  name: "MindX",
};
const sayHello = (x) => {
  let { name } = x;
  name = "Code Intensive";
};
console.log(sayHello(obj));
