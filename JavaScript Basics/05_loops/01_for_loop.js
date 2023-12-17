/* In JavaScript, a for loop is a control flow statement that allows you to repeatedly execute a block of code.
There are several types of for loops in JavaScript, but the most common one is the "traditional" for loop. */

// Simple for loop syntax
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Example 1
// Sum of 1 to 10 numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(`The sum of 1 to 10 is ${sum}.`);

// Example 2
// Counting down numbers
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// Example 3
// Printing even numbers
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// Example 4
// Nesting of for loop
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(i * j);
  }
}

const myArr = ["Hulk", "Thor", "Pegasus"];
for (let index = 0; index < myArr.length; index++) {
  const element = myArr[index];
  console.log(element);
}

// Break
for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

// continue
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    console.log("This is lucky number");
    continue;
  }
  console.log(i);
}
// Example of for-of loop
const array = [1, 2, 3, 4, 5, 6, 7, 8];
for (const element of array) {
  console.log(element);
}
