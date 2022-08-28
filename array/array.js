const arr = ["samir", "chinmoy"];

// Add Elements to array 1.
arr[arr.length] = "mahdi";
arr.push("salman");
arr.pop(); // remove the last element from an array
arr.pop(); // remove the last element from an array

// spread array (copy element's from an array and add new elements)

const newArr = ["ashik", "Rahim", ...arr];
// console.log(newArr);

const obj = { 0: "Ashik", 1: "student", length: 2 };

const arrayS = Array.from(obj);
console.log(arrayS);

const ex = "samir";
