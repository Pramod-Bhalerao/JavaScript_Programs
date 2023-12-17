let shoppingCart = [
  {
    Product: "Mobile",
    Price: 22999,
  },
  {
    Product: "Mobile-Cover",
    Price: 299,
  },
  {
    Product: "Laptop-Dell",
    Price: 69999,
  },
  {
    Product: "Powerbank-Realme",
    Price: 1999,
  },
];

let priceToPay = shoppingCart.reduce(function (acc, item) {
  console.log(`acc value is ${acc} and item value ${item.Price}`);
  return acc + item.Price;
}, 0);
console.log(`Your Cart Price Is : ${priceToPay}.`);
console.log("Proceed To Payments!");
