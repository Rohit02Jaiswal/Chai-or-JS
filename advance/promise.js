// Creating and consuming promises ----------------------------
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        // console.log("Async task is complete.");
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    // console.log("promise consumed.");
})

// Another way ---------------------------------
new Promise(function(rohit, jaiswal){
    setTimeout(function(){
        // console.log("Async task 2 is complete.");
        rohit();
    }, 1000)
}).then(function(){
    // console.log("2nd promise consumed.");
})

// Another promise --------------------------
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    // console.log(user);
})

// Another promise -------------------------------
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Rohit", password: "12334"});
        }
        else{
            reject('ERROR: Something went wrong!');
        }
    }, 2000)
})
promiseFour.then((user) => {
    // console.log(user);
    return user.username;
})
.then((username) => {
    // console.log(username);
})
.catch((error) => {
    // console.log(error);
})
.finally(() => {
    // console.log("The promise is either resolved or rejected");
})

// Another promise --------------------------------------------
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Rohit", password: "12334"});
        }
        else{
            reject('ERROR: Something went wrong!');
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();