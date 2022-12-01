// Asynchronous JS
// 1st
function getUser(id, callback) {
  // 1st api call - /getuser/:id
  console.log("Reading a user from backend...", id);
  setTimeout(function () {
    const data = {
      id: id,
      gitHubUsername: "superiqbal7",
    };
    callback(data);
  }, 2000);
}

// 2nd
function getRepository(username, callback) {
  if (!username) {
    console.log("No username specified, thus /getrepository api failed");
  } else {
    setTimeout(function () {
      console.log("Calling GitHub API...", username);
      const data = ["repo 1", "repo 2", "repo 3"];
      callback(data);
    }, 4000);
  }
}

// 3rd api call - /commit
function commit(repo, callback) {
  setTimeout(function () {
    const data = { commit1: "some data", commit2: "some data" };
    callback(data);
  }, 1000);
}

getUser(1, function (user) {
  console.log("User: ", user);

  getRepository(user.gitHubUsername, function (repository) {
    console.log("Repository", repository);

    commit(user, function (repo) {
      console.log("git commit");
      console.log(repo);
    });
  });
});
