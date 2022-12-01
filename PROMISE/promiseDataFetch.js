function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        id: id,
        getUserName: "mahdi",
        hobby: ["1: Coding, 2: Gaming", "3: Watching Movie"],
      };
      resolve(data);
    }, 1000);
  });
}

function getUserName(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userName);
    }, 2000);
  });
}
function getHobby(hobby) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(hobby);
    }, 3000);
  });
}

getUser(20122).then((user) => {
  console.log("User Id:", user.id);
  getUserName(user.getUserName).then((idname) => {
    console.log("User Name: " + idname);
    getHobby(user.hobby).then((hobbies) => {
      console.log("User Hobby: ", hobbies);
    });
  });
});
