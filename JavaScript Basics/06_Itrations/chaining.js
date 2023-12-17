let newNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myNumbers = newNumber
  .map((value) => {
    return value + 10;
  })

  .map((value) => {
    return value + 100;
  })
  .filter((value) => {
    return value >= 500;
  });

console.log(myNumbers);

let myDay = ["eat", "sleep", "code", "repeat"];

let today = myDay
  .map((item) => item.toUpperCase())
  .map((item) => item + "!")
  .filter((item) => item.length <= 4);
console.log(`My day Routine is : ${today}.`);
