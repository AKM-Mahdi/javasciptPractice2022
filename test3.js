const users = [
  { firstName: "John", lastName: "Doe", age: 26 },
  { firstName: "Rahim", lastName: "Iqbal", age: 26 },
  { firstName: "Shakib", lastName: "Al Hasan", age: 33 },
  { firstName: "Lionel", lastName: "Messi", age: 33 },
  { firstName: "Christiano", lastName: "Ronaldo", age: 37 },
];

// create an array of object that contains
// acc = {
//   26: 2,
//   33: 2,
//   37: 1,
// };

// Create an array that contains full name of each person who are older than 30
const olderThenThiryArr = [];
const olderThenThiryObj = users.filter((item) => item.age > 30);
olderThenThiryObj.map((item) => {
  olderThenThiryArr.push(item.firstName + " " + item.lastName);
});
console.log("Name of peoples are older then 30: ", olderThenThiryArr);

// create an array of object that contains

var newObj = {};

users.map((item) => {
  var temp = item.age;
  if (newObj.hasOwnProperty(item.age)) {
    const quantity = parseInt(newObj[item.age]) + 1;
    newObj[item.age] = quantity;
  } else {
    newObj[item.age] = 1;
  }
});
console.log("array of object that contains", newObj);
