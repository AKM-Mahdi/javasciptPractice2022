const sum = (a, b) => {
  return a + b;
};

const mul = (a, b) => {
  return a * b;
};
const display = (res) => {
  console.log(res);
};

const exe = (x, y, fn, callback) => {
  const result = fn(x, y);
  callback(result);
};

exe(2, 3, mul, display);
