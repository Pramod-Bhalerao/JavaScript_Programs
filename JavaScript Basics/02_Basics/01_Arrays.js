const newArr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(newArr[2]);

// Arrays elements can have multiple types in one array for EX.
const newArr2 = [5, "THOR", true, 7, false, "Hulk"];
console.log(newArr2);

//  Arrays Methods
const newArr3 = [1, 2, 3, 4, 5];
newArr3.push(6); // To add elements at the end of Array
newArr3.pop(); // It removes last element of Array

newArr3.unshift(31); // To add elements at the starting of Array
newArr3.shift(); // It removes first element of Array
console.log(newArr3);

console.log(newArr3.includes(6)); // find value is present inarray or not & returns in BOOL value
console.log(newArr3.indexOf(3)); // Gives the index of entered value

// Slice & Splice
console.log("A", marvel_Heros);
const myNA = marvel_Heros.slice(1, 3); //
console.log(myNA);

console.log("B", Dc_Heros);
const myNA2 = Dc_Heros.splice(1, 3); // Manupulates original array
console.log(myNA2);
