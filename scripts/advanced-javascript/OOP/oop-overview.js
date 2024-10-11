const date = new Date();
const name = new String("mohamed");
const arr1 = new Array("mohamed", "ahmed");
const arr2 = new Array("mohamed", "ahmed");
const obj = new Object({ name: "mohamed", last: "ahmed" });

// Literal
// const name = "mohamed"; // String Literal
// const arr = ["mohamed", "ahmed"]; // array Literal
// const obj = { name: "mohamed", last: "ahmed" }; // object Literal

console.dir(date);
console.dir(name);
// console.dir(arr);
console.dir(obj);
console.log(arr1.filter === arr2.filter);
