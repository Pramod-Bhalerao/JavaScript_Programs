// Classes In JavaScript

// class user{
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encriptPassword(){
//         return `${this.password}ABC`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}.`
//     }
// }

// const Employee = new user("poms","rgr@gmail.com",5444)
// console.log(Employee.encriptPassword());
// console.log(Employee.changeUsername());

function User(username,email,password){
    this.username = username
    this.email = email
    this.password = password

    User.prototype.changeUsername = function(){
       return `${this.username.toUpperCase()}`
    }

    User.prototype.encryptPassword = function(){
       return `${this.password}ASD.`
    }
}

const EMP = new User("Gojo","dvvu@gmail.com","45454")
console.log(EMP);
console.log(EMP.changeUsername());
console.log(EMP.encryptPassword());