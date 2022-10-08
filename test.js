const hasMeeting = false;

<<<<<<< HEAD
const meeting = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (!hasMeeting) {
      const meetingDetails = {
        name: "Technical Meeting",
        location: "Dhaka",
        time: "5.50",
      };
      resolve(meetingDetails);
    } else {
      x = "no data found";
      resolve(x);
    }
  }, 2000);
});

const addToCalender = (meetingDetails) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const calender = `name= ${meetingDetails.name} , location=${meetingDetails.location} `;
      resolve(calender);
    }, 1000);
  });
};

meeting.then((res) => {
  console.log(res);
  addToCalender(res).then((calender) => {
    console.log(calender);
  });
});
=======
// console.log(squareSum([1, 2, 2]));

// console.log("before");
// setTimeout(() => {
//   console.log("inside...");
// }, 2000);

// console.log("after");

// console.log("before");
// getUser(1, function (user) {
//   console.log(user);
//   getRepo();
//   console.log("get repo fetching");
// });

// function getUser(id, callback) {
//   setTimeout(() => {
//     console.log("getting data from api");
//     const data = {
//       id: id,
//       getUserName: "Mahdi",
//     };
//     callback(data);
//   }, 2000);
// }
// console.log("after");

// function getRepo() {
//   setTimeout(() => {
//     console.log(["repo 1", "repo 2"]);
//   }, 5000);
// }

const sum = (a, b) => {
  console.log(a + b);
};

sum();
>>>>>>> c4c32da6fe3adc8281cec8dfafbbd864e1f55d99
