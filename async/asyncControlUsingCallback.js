// Order placed by Customer
const orderPlace = (customer, callback) => {
  console.log("order placing...:");
  setTimeout(() => {
    console.log("Order placed by Customer", customer);
    callback();
  }, 3000);
};

// order receiving
const recvOrder = (waiter, callback) => {
  setTimeout(() => {
    console.log("order received by", waiter);
    callback();
  }, 2000);
};

const orderCompleted = () => {
  setTimeout(() => {
    console.log("Cooking Completed");
  }, 2000);
};

orderPlace("Rahim", () => {
  recvOrder("azmain", () => {
    orderCompleted();
  });
});
