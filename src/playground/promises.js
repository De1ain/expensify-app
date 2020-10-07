const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolved data');
        // reject('This is my reject');
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log("1 data", data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise');
            // reject('This is my reject');
        }, 5000);
    });
}).then((data) => {
    console.log("Does this run?", data)
}).catch((data) => {
    console.log("Error: ", data)
});


console.log('after');