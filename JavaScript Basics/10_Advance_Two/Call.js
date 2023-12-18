function setUsername(username) {
  // Function for getting Username for our App
  this.username = username;
}

function createUser(username, email, password) {
  setUsername.call(this,username)
  this.email = email;
  this.password = password;
}

const Valiadate = new createUser("Poms", "123@google.com", 554888);
console.log(Valiadate);
