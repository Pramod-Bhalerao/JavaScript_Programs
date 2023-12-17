// OBJECTS SINGLETON

const BgmiUser = {};
BgmiUser.id = 54484584;
BgmiUser.name = "Thug-Poms";
BgmiUser.isLoggedIn = true;
console.log(BgmiUser);

// Nesting Of Objects
const regularUser = {
  emailId: "Shaktimaan@ms.com",
  fullName: {
    userFullName: {
      firstName: "Mr",
      lastName: "Poms",
    },
  },
};
console.log(regularUser.fullName.userFullName);

// CONCATINATION OF OBJECTS
const object1 = { A: 1, B: 2 };
const object2 = { C: 3, D: 4 };
const object3 = { E: 5, F: 6 };

const object4 = Object.assign({}, object1, object2, object3); // Using Assign Method
console.log(object4);

const object5 = {...object1,...object2,...object3}  // Using Spread Operator
console.log(object5);

const users =  [
  {
    id : 1,
    email : "Poms@gmail.com",
  },
  {
    id : 2,
    email : "Poms2@gmail.com",
  },
  {
    id : 3,
    email : "Poms3@gmail.com",
  }
]
console.log(users[1].email);

console.log(BgmiUser);
console.log(Object.keys(BgmiUser));    // 
console.log(Object.values(BgmiUser));  // 
console.log(Object.entries(BgmiUser)); // 
console.log(BgmiUser.hasOwnProperty('isLoggedIn')); 
