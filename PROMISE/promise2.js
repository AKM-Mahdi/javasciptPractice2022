// getCustomer(1, (customer) => {
//   console.log("customer: ", customer);
//   if (customer.isPremium) {
//     console.log("Top Movies: ", movies);
//     sendEmail(customer.email, movies, () => {
//       console.log("Email sent...");
//     });
//   }
// });

getCustomer().then((res) => {
  console.log("Cheking Customer memebership...");
  getTopMovies(res).then((movie) => {
    console.log(movie);
    sendEmail(res.email).then((data) => {
      console.log(data);
    });
  });
});

function getCustomer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Iqbal",
        isPremium: false,
        email: "akmmahdi115555@gmail.com",
      });
    });
  });
}

function getTopMovies(customer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (customer.isPremium == true) {
        console.log("Customer has premium memebership. Top Movie List : ");
        resolve(["movie1", "movie2"]);
      } else {
        resolve("customer is not premium");
      }
    }, 2000);
  });
}

function sendEmail(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ticket has been send to this email " + email);
    }, 2000);
  });
}
