// Define a class named 'user' to represent user information.
class User {
    // Constructor to initialize the user with an email and password.
    constructor(email, password) {
        // Private properties for email and password using underscore convention.
        this._email = email;
        this._password = password;
    }

    // Getter method for the 'email' property.
    get email() {
        // Returns the email in uppercase with a period at the end.
        return `${this._email.toUpperCase()}.`;
    }

    // Setter method for the 'email' property.
    set email(data) {
        // Sets the private '_email' property with the provided data.
        this._email = data;
    }

    // Getter method for the 'password' property.
    get password() {
        // Returns the password in uppercase with a period at the end.
        return `${this._password.toUpperCase()}.`;
    }

    // Setter method for the 'password' property.
    set password(value) {
        // Sets the private '_password' property with the provided value.
        this._password = value;
    }
}

// Create an instance of the 'User' class with the email "pramod@gmail.com" and password "mojo123".
const Intas = new User("pramod@gmail.com", "mojo123");

// Display the email and password of the 'Intas' user instance.
console.log(Intas.email);
console.log(Intas.password);
