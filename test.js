const person1 = {
  fname: "mahdi",
  lname: " A K M",
  fullName: function () {
    return this.fname + this.lname;
  },
};

console.log(person1.fullName());
