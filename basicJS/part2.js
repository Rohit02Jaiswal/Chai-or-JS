// Objects -----------------------------------------------------
// Singleton:
Object.create  // Constructor method

//  Object literals
const JsUser = {
    Name: "Rohit",
    Age: 22,
    Location: "Noida",
    Email: "Jais@gmail.com",
    isLogged: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser);
// console.log(JsUser.Email);
// console.log(JsUser["Email"]);
JsUser.Email = "rohit@gmail.com";  // Values over-ride
// console.log(JsUser.Email);
// console.log(JsUser);
// Object.freeze(JsUser);  // After freezing you will not be able to change anything in the object.
JsUser.Email =  "apple@gmail.com";
// console.log(JsUser.Email);

// Object Function ---------------------
JsUser.greeting = function() {
    console.log("Hello Jaiswal!");
}

// console.log(JsUser.greeting());  // Output: Hello Jaiswal!
// console.log(JsUser.greeting);  // [Function (anonymous)]

JsUser.greetingTwo = function(){
    console.log(`Hello ${this.Name}`);
}
// console.log(JsUser.greetingTwo());

// Nested Object --------------------------------------
const user = {
    Email: "apple@gmail.com",
    FullName : {
        firstName: "Rohit",
        lastName: "Jaiswal"
    }
}

// console.log(user.FullName.lastName); // Output: Jaiswal

// Object Merge ----------------------------------
const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = {obj1, obj2}; // Creating a problem
// console.log(obj3);

// const objRes = Object.assign(obj1, obj2); // bad syntax
const objRes = Object.assign({}, obj1, obj2);
// console.log(objRes);

const obj3 = {...obj1, ...obj2}; // Latest usable syntax
console.log(obj3);