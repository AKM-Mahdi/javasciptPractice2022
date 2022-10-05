// function getUser(id) {
//   setTimeout(() => {
//     console.log("getting data from api");
//     const data = {
//       id: id,
//       getUserName: "Mahdi",
//     };
//   }, 2000);
// }

// function getRepo() {
//   setTimeout(() => {
//     console.log(["repo 1", "repo 2"]);
//   }, 5000);
// }

// function getCommit() {
//   setTimeout(() => {
//     console.log("commited");
//   }, 3000);
// }

const p = (Promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(1);
    reject(new Error("error occured"));
  }, 2000);
}));

p.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});
