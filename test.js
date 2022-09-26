// function squareSum(numbers) {
//   var result = 0;
//   for (var i in numbers) {
//     result = result + numbers[i] * numbers[i];
//   }
//   return result;
// }

// console.log(squareSum([1, 2, 2]));

// console.log("before");
// setTimeout(() => {
//   console.log("inside...");
// }, 2000);

// console.log("after");

console.log("before");
getUser(1, function (user) {
  console.log(user);
  getRepo();
  console.log("get repo fetching");
});

function getUser(id, callback) {
  setTimeout(() => {
    console.log("getting data from api");
    const data = {
      id: id,
      getUserName: "Mahdi",
    };
    callback(data);
  }, 2000);
}
console.log("after");

function getRepo() {
  setTimeout(() => {
    console.log(["repo 1", "repo 2"]);
  }, 5000);
}
