var temp = 0;
function sum(arr, n) {
  // Only change code below this line

  for (let i = 0; i < arr.length; i++) {
    if (i < n) {
      temp += arr[i];
    }
  }
  console.log(temp);
}

sum([1, 2, 3, 4], 2);

// Only change code above this line
