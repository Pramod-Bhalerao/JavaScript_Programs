//SCOPES IN JAVASCRIPT

// Global Scope
var globalVariable = "I am in the global scope";

function exampleFunction() {
  // Local Scope
  var localVariable = "I am in the local scope";

  // Accessing global variable from within the function
  console.log("Inside the function: " + globalVariable);

  // Accessing local variable from within the function
  console.log("Inside the function: " + localVariable);
}

// Accessing global variable outside the function
console.log("Outside the function: " + globalVariable);

// Trying to access local variable outside the function will result in an error

exampleFunction();

function one() {
  // Declare username as global variable
  const username = "poms";
  function two() {
    // Local variable for given function
    const website = "YouTube";
    // Accessing global variable in the function
    console.log(username);
  }
  // Accessing local variable outside the function
  console.log(website);
  // calling function two()
  two();
}
// Calling function one()
one();

/* HOISTING IN JAVASCRIPT :-
    Hoisting is a JavaScript behavior where variable and function declarations are moved to the top
    of their containing scope during the compilation phase. This means that you can use a variable or 
    call a function before it's declared in the code. */

// Example 1
console.log(addone(5));
function addone(num) {
  return num + 1;
}

// Example 2
greet();
function greet() {
  console.log("Hello, hoisting!");
}
