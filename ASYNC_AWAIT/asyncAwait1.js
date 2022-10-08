// getCustomer().then((res) => {
//   console.log("Cheking Customer memebership...");
//   getTopMovies(res).then((movie) => {
//     console.log(movie);
//     sendEmail(res.email).then((data) => {
//       console.log(data);
//     });
//   });
// });

async function getCustomers() {
  const customer = await getCustomer();
  console.log("Cheking Customer memebership...");

  if (customer.isPremium == true) {
    const getMovies = await getTopMovies(customer);
    console.log(
      `${customer.name} has premium memebership. Top Movie List : ${getMovies}`
    );
    const customerEmail = await sendEmail(customer.email);
    console.log(`Ticket has been send to this email : ${customerEmail}`);
  }
}
getCustomers();

function getCustomer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Iqbal",
        isPremium: true,
        email: "akmmahdi115555@gmail.com",
      });
    });
  });
}

function getTopMovies(customer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (customer.isPremium == true) {
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
      resolve(email);
    }, 2000);
  });
}
