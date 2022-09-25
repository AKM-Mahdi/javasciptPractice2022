function squareSum(numbers) {
  var result = 0;
  for (var i in numbers) {
    result = result + numbers[i] * numbers[i];
  }
  return result;
}

console.log(squareSum([1, 2, 2]));
