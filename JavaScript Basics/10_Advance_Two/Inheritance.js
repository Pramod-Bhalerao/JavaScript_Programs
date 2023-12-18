class User{
    constructor(username){
        this.username = username
    }

    callMe(){
        return `My username is ${this.username}.`
    }
}

class teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    newCource(){
        return `A new cource is added by ${this.username} Sir.`
    }
}

const First = new User("Pramod")
console.log(First.callMe());

const Second = new teacher("MS","ss@gmail.com","545")
console.log(Second.callMe());

console.log(Second instanceof teacher);