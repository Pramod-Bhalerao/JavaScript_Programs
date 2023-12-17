// Arrow Function

const user = {
  username: "MrPoms",
  role: "Js Devloper",
  company: "Delloite",

  welcomeMessage: function () {
    console.log(
      `Hello , Your username is ${this.username} and your job role is ${this.role}.`
    );
    console.log(this);
  },
};
user.welcomeMessage();
user.username = "Suraj";
user.welcomeMessage();



