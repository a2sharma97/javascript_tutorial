// const promiseOne = new Promise(function(resolve, reject) { //creation of promise
// })

const promiseOne = new Promise(function (resolve, reject) {
    // resolve();//first runs promise then asyn task
setTimeout(function() {
    console.log("Async task is complete");
        resolve(); //first asyn task runs then promise returns
            // resolve();//if we not use this then promise will not work
},1000)
// resolve();//first runs promise then asyn task
})

// console.log(promiseOne);//returns a promise 
promiseOne.then(function() { //works with resolve
console.log("promise consumed");
})

new Promise(function(resolve, reject) {
setTimeout(function() {
    console.log("Async task 2");
    resolve();
},1000)
}).then(function() {
console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject) {
setTimeout(function(){
    resolve({username: "Abhishek", email: "abhi@example.com"});//send args as a promise
},1000)
})

promiseThree.then(function(user) {
console.log(user);
})

//promise chaining
const promiseFour =  new Promise(function(resolve, reject) {
setTimeout(function() {
    let error = true;//throws an error
    if(!error) {
        resolve({username: "abhishek", password: "123"});
    } else {
        reject("ERROR : something went wrong");
    }
},1000)
})

promiseFour.then((user) =>{
console.log(user);
return user.username;//returns to the next then().
}).then( (username)=> {
console.log(username);
}).catch((error) => {
console.log(error);
}).finally(() => console.log("The promise is either resolve or rejected"));

//Handle promise using async/await

const promiseFive = new Promise(function(resolve, reject) {
setTimeout(function() {
    let error = false;//not thrown any error
    if(!error) {
        resolve({username: "javascript", password: "123"});
    }else {
        reject("ERROR: JS went wrong");
    }
}, 1000)
})

async function consumePromiseFive() {
const response = await promiseFive;
console.log(response);
}
consumePromiseFive();

// if error is thrown then in case of async/await we use try and catch block otherwise it gives error

const promiseSix = new Promise(function(resolve, reject) {
setTimeout(function() {
    let error = true;//thrown an error
    if(!error) {
        resolve({username: "javascript", password: "123"});
    }else {
        reject("ERROR: JS went wrong");
    }
}, 1000)
})

async function consumePromisesix() {
try {
    const response = await promiseSix;
    console.log(response);     
} catch (error) {
    console.log(error);
}

}
consumePromisesix();