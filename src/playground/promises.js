const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolved data');
        // reject('This is my reject');
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log("1 data", data)
}).then((data) => {
    console.log("This one's gonna run too")
}).catch((data) => {
    console.log("Error: ", data)
});


console.log('after');