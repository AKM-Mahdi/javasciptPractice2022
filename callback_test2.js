const calculator = (a, b, callback) => {
  const result = a * b;
  callback(result);
};

calculator(2, 5, (res) => {
  console.log(res);
});
