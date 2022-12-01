// find a prime no

// const checkPrime = (number) => {
//   var count = 0;
//   for (i = 0; i <= number; i++) {
//     if (number % i == 0) {
//       count = count + 1;
//     }
//   }
//   if (count > 2) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(checkPrime(18));

const isPrime = (nummber) => {
  for (i = 2; i < nummber / 2; i++) {
    if (nummber % i == 0) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(isPrime(18));
