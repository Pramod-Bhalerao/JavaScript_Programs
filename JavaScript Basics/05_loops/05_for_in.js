/* the for...in loop is used to iterate over the enumerable properties of an object.
It is often used with objects, but it can also be used with arrays to iterate over 
their indices. However, it's important to note that using for...in with arrays can 
lead to unexpected results because it iterates over all enumerable properties */

// Using for in loop with objects
let car = {
  Model: "Ertiga",
  Color: "White",
  Company: "Suzuki",
  Year: 2024,
};

for (const key in car) {
  console.log(`${key} :- ${car[key]}`);
}

// Using for in loop with arrays
let programming = ["CSharp", "JavaScript", "java", "Python"];
for (const key in programming) {
  console.log(`${programming[key]}`);
}

// For-Of Loop
let Fruits = ["Mango","Apple","Banana","Watermelon"]
for (const fruit of Fruits) {
    console.log(fruit);
}
