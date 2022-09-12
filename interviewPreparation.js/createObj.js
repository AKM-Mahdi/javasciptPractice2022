// What are the possible ways to create obj?

// >> Using Obj Constructor

var obj = new Object();

obj.name = "Mahdi";
console.log(obj);

// >> Using Obj Create method

var obj2 = Object.create(null);
obj2.age = 35;
console.log(obj2);

// Using Obj Literals Syntax

var obj3 = {
  name: "Mahdi",
  age: 26,
};

console.log(obj3);
