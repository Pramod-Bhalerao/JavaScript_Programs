// Using Object.getOwnPropertyDescriptor to get the property descriptor of 'PI' in the Math object.
const Descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// Logging the property descriptor to the console.
console.log(Descriptor);

// Define an object 'user' with properties.
const user = {
  username: "Pramod",
  passWord: "mr159",
  eMail: "Dell@gmail.com",
  isLoggedIn: true,
};

// Log the property descriptor of the 'username' property before modification.
console.log(Object.getOwnPropertyDescriptor(user, "username"));

// Use Object.defineProperty to modify the attributes of the 'username' property.
Object.defineProperty(user, "username", {
  writable: false, // Make the property not writable.
  enumerable: false, // Make the property not enumerable.
});

// Log the property descriptor of the 'username' property after modification.
console.log(Object.getOwnPropertyDescriptor(user, "username"));
