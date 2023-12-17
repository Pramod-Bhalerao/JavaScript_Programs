// Immediately Invoked Function Expressions (IIFE)

/* It is a design pattern in JavaScript where a function is defined and executed immediately after it is created. 
This pattern is often used to create a private scope for variables, preventing them from polluting the global scope.*/

// Named IIFE
(function Bike(){
    console.log(`Database Connected`);
})();

// Unnamed IIFE
(() => {
    console.log(`Database Connected Succesfully`);
})();

// IIFE Using Parameters
(function Car (name){
    console.log(`Car name is ${name}`);
})("Scorpio");

