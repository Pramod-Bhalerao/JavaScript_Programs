/* The while loop in JavaScript is a control flow statement that repeatedly 
   executes a block of code as long as a specified condition evaluates to true. */

/* The condition is evaluated before each iteration. If the condition is true,
   the code inside the loop is executed. After the code execution, the condition 
   is checked again, and the loop continues until the condition becomes false. */

// Simple code of while loop
let Count = 1;
while (Count <= 10) {
  console.log("Count : ", Count);
  Count++;
}

// Example 1
let counter = 5;
while (counter > 0) {
  console.log("Counter is :", counter);
  counter--;
}
console.log("Blast");

// Example 2
let sum = 0;
let number = 1;
while (number <= 10) {
  sum += number;
  number++;
}
console.log("The sum of 1 to 10 number is :", sum);

let beyBlade = ["Eagle", "Pegasus", "L-Drago", "Leone"];
let power = 0;
while (power < beyBlade.length) {
  console.log(`Top beyblade is : ${beyBlade[power]}`);
  power = power + 1;
}

// DO-WHILE-LOOP
 
let strength = 1;
do {
  console.log(`The strength is ${strength}.`);
  strength++;
} while (strength <= 8);
