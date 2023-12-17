let mydate = new Date()
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toString());
console.log(typeof mydate); // Date is a OBJECT

let myDateTwo = new Date(2023,0,5) // Months are started from 0 
console.log(myDateTwo.toDateString());

let myDateThree = new Date(2023,0,5) 
console.log(myDateThree.toLocaleString());

let myCustomDate = new Date("11-07-2023") // In MM-DD-YY format 
console.log(myCustomDate.toLocaleString());

