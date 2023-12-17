// FUNCTIONS

// Simple example of calling functions
function sayMyName() {
  console.log("MrPoms");
}
sayMyName();

// Addition of two number
function addTwoNumber(number1, number2) {
  let result = number1 + number2;
  return result;
}
let sum = addTwoNumber(11, 9);
console.log("Result: ", sum);

// Multiplication of two number
function multiplyNumber(number1, number2) {
  let result = number1 * number2;
  return result;
}
let multiply = multiplyNumber(10, 5);
console.log("Result: ", multiply);

// Simple login msg function with if statement
function loginUserMsg(username) {
  if (username == undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} Just logged in`;
}
console.log(loginUserMsg("MrPoms"));

function calculateCartPrice(...number) {
  // Rest operator
  return number;
}
console.log(calculateCartPrice(299, 399, 499));


// passing objects in functions
const customer = {
  custName: "Pramod",
  price: 499,
};

function objectHandling(anyobjects) {
  console.log(`customers username is ${anyobjects.custName} and there cart price is ${anyobjects.price}`);
}
objectHandling(customer);

// Handling array with functions
const NewArray =[100,200,300,400]
function secondArray(getarray) {
  return getarray[2]
}
console.log(secondArray(NewArray));

// handling function with for loop
function table(first, last) {
  for (let x = 20; x <= 40; x += 2) {
    console.log(x);
  }
}
table(21, 40);
