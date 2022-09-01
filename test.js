// let obj = {
//   a: 1,
//   b: {
//     c: 2,
//   },
// };

// let newObj = JSON.parse(JSON.stringify(obj));
// console.log(newObj);
// obj.b.c = 20;
// // console.log(obj); // { a: 1, b: { c: 20 } }
// // console.log(newObj); // { a: 1, b: { c: 2 } } (New Object Intact!)

let x = {
  a: 2,
  b: "mahdi",
};
console.log(JSON.stringify(x));
