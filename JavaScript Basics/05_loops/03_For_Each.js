/* The forEach method is a built-in method for arrays in JavaScript. It is used to iterate 
over the elements of an array and execute a provided function once for each array element. */

// Using simple function
let Coding = ["JavaScript", "CSharp", "Python", "Java", "Html"];
Coding.forEach(function (Value) {
  console.log(`Programming Language is : ${Value}`);
});

// Using arrow function
let beyBlade = ["LDrago", "Pegasus", "Leone", "Striker", "Eagle"];
beyBlade.forEach((Any) => {
  console.log(`Most Powerfull BeyBlade are : ${Any}`);
});

let Fruits = ["Orange", "Mango", "PineApple", "Banana", "Apple"];
Fruits.forEach((fruits, index, array) => {
  console.log(`Fruit : ${fruits}`);
  console.log(`Index No : ${index}`);
  console.log(`Array : ${array}`);
});

let Players = [
  {
    GameName: "BGMI",
    playerName: "Thug-Poms",
    level: 77,
  },
  {
    GameName: "BGMI",
    playerName: "HECTOR",
    level: 74,
  },
  {
    GameName: "BGMI",
    playerName: "Thug-Awm",
    level: 68,
  },
  {
    GameName: "BGMI",
    playerName: "uniquedevil",
    level: 76,
  },
];

Players.forEach((item) => {
  console.log(`Game : ${item.GameName}`);
  console.log(`Player Name : ${item.playerName}`);
  console.log(`Level : ${item.level}`);
});
