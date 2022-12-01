const names = ["Rahim", "karim", "ashik"];

const print = (arr, callback) => {
  for (i = 0; i < arr.length; i++) {
    const item = arr[i];
    callback(item);
  }
};

print(names, (name) => {
  console.log(name);
});
