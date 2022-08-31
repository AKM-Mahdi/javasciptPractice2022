// 1. dot notation and bracket notation
// 2. for in
// 3. Factory function
// 4. Delete property from an object
// 5. Call by value & Call by reference
// 6. Shallow Copy

obj = {
  firstName: "A K M",
  lastName: "Mahdi",
};

const newObj = {
  ...obj,
  fulllname: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

newObj.fulllname();

// console.log(obj);
// console.log(newObj);

// for (let n in obj) {
//   //   console.log(obj[n]);
// }

// ? To check the property is available in object
// let input = "name";
// console.log(input in obj);
