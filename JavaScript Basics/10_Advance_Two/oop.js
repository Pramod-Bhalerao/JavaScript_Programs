// Objects Literals
const user = {
  uasername: "Poms",
  Pass: "djih",
  marks: 80 + 15,

  userDetails: function () {
    // console.log("DATABASE CONNECTED..");
    // console.log(`Username : ${this.uasername}`);
  },
};
// console.log(user.userDetails());

function employee(username, logInCount, isLoggedIn) {
  this.username = username;
  this.logInCount = logInCount;
  this.isLoggedIn = isLoggedIn;
}
const userOne =  new employee("Poms", 25, true);
const userTwo =  new employee("Gojo",24,false)
console.log(userOne);
console.log(userTwo);

function Cars(Model,Color,Price){
    this.Model = Model;
    this.Color = Color;
    this.Price = Price;
}
const CarOne = new Cars("Ford","Black","25LKs")
console.log(CarOne);