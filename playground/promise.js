// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('Hey, it worked');
//         reject('Sorry')
//     }, 2500);
    
// });


// var somePromise = new Promise((resolve, reject) => {
//         resolve('Hey, it worked');
//         reject('Oh no');
// }).then((message) => {
//     console.log('Success: ', message);
// }, (errorMessage) => {
//     console.log('Error: ', errorMessage);
// })


// We want to be able to accept input
// So, to do that, we want to create a function that returns a Promise

var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        if(a + b === 5){
            resolve(a + b)
        } else {
            reject('not numbers')
        }
    })
}

asyncAdd(2, 4).then((result) => {
    console.log(result);
}, (errorMessage) => {
    console.log(errorMessage);
});

// Promise is a function 
// Promise takes one arg
// resolve, reject (to manage the state of the Promise)
//          instead of using conditionals
//      Ask yourself: what do you want to present the user?
//  You can only pass one arg to resolve and reject
// If you need more, create an object
// .then    Do something with the Promise once it's resolved or rejected
//   this is where we make our callback functions
// A Promise is either Pending(waiting on an async call) or Settled(resolved, rejected)

// For a Promise to accept input, wrap it in a Function and
//  return the Promise