/* the switch statement provides a way to handle multiple conditions in a more concise manner than 
   using a series of if-else if statements. It is often used when you have a variable to test against 
   multiple possible values.*/

let Fruit = "Mango";

switch ("Mango") {
  case "Banana":
    console.log("This is a banana");
    break;
  case "Orange":
    console.log("This is a Orange");
    break;
  case "Pineapple":
    console.log("This is a pineapple");
    break;
  case "Apple":
    console.log("This is a Apple");
    break;
  case "Mango":
    console.log("This is a Mango");
    break;
  default:
    console.log("There is no mango are availaible");
    break;
}


// Example 2
let dayOfWeek = 4;
let dayName;

switch (dayOfWeek) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    console.log("Invalid Day");
    break;
}
console.log(`Today is ${dayName}.`);