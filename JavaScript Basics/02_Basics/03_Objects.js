// OBJECTS LITERALS

const mySym = Symbol("Key1"); // Defines Symbol

const JsUser = {
  // Define object and its properties
  name: "Poms",
  email: "Poms@gmail.com",
  age: 23,
  [mySym]: "myKey1",
  location: "Pune",
  isLoggedIn: true,
  lastLoggedInDay: ["Monaday", "Friday"],
};

// These are two ways of accessing objects properties
console.log(JsUser.name);
console.log(JsUser["name"]);

console.log(JsUser[mySym]); // This way we print symbols

// We can change value of keys of object
JsUser.age = 25;
console.log(JsUser.age);

// Object.freeze(JsUser)  // When we lock object then we cant change the of object anymore

JsUser.name = "MrPoms";
console.log(JsUser); // prints the object

// FUNCTIONS 
JsUser.greetings = function () {  // Defines a function
  console.log("Hello Poms");
};
console.log(JsUser.greetings());

JsUser.greetingsTwo = function () {
  console.log(`Hello Js User, ${this.name}`); // Using string interpolation
};
console.log(JsUser.greetingsTwo());
