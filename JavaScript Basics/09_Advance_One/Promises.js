/* 
Promise : Promises are created using the Promise constructor, which takes a single function as an argument. 
    This function, called the executor, takes two parameters: resolve and reject. These are functions provided by 
    the promise implementation to indicate the successful completion or failure of the asynchronous operation.

States Of Promises :- 
    Pending => The initial state, neither fulfilled nor rejected.
    Fulfilled => Meaning that the operation completed successfully, and the promise has a resulting value.
    Rejected => Meaning that the operation failed, and the promise has a reason for the failure. 

Consuming Promises : You can consume promises using the .then() and .catch() methods. 
    The .then() method is called when a promise is fulfilled, and the .catch() method is called 
    when a promise is rejected.
*/

// Example One
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("Asyn Task One is in Queue");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Task is Completed");
});

// Example Two
new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("Asyn Task Two Is In Queue");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Task Is Completed");
});

// Example Three
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Pramod", password: "123456" });
    } else {
      reject("ERROR : Something is went wrong");
    }
  }, 1000);
});
promiseThree 
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  });


// Example Four
fetch("https://api.github.com/users/Pramod-Bhalerao")
  .then((Response) => {
    return Response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("error is happend");
  });

