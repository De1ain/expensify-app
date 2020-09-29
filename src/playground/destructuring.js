// Object destructuring

// const person = {
//     name: 'Tim',
//     age: 32,
//     location: {
//         city: 'Holon',
//         temperature: 36
//     }
// };

// // const name = person.name;
// // const age = person.age;

// const { name: firstName = 'Anonymous' , age } = person;
// console.log(`${firstName} is ${age}.`);



// const { city, temperature: temper } = person.location;
// if (city && temper) {
//     console.log(`It's ${temper} in ${city}`);
// }


// const book = {
//     title: 'Ego is the enemy',
//     author: 'Tyan Holliday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self publish'} = book.publisher;
// console.log(publisherName);



// Array destructuring

// const address = ['1299 st junip street', 'Philly', 'Pennsylvania', '12345'];
// // const [street, city, state, zip] = address;
// const [street = 'The street', city, state = 'New York', zip] = address;

// // console.log(`You are in ${address[1]}, ${address[2]}`);
// console.log(`You are in ${city}, ${state}. Your zip is: ${zip}`);
// console.log(`Street ${street}`);


// Challenge
const item = ['Coffee', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium coffee costs ${mediumPrice}`);