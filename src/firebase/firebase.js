import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAVbx3dL3iQzAjdTZv0WP06d3iSEIb34kU",
    authDomain: "expensify-1eabf.firebaseapp.com",
    databaseURL: "https://expensify-1eabf.firebaseio.com",
    projectId: "expensify-1eabf",
    storageBucket: "expensify-1eabf.appspot.com",
    messagingSenderId: "534173691275",
    appId: "1:534173691275:web:d82d3edc9f21c12b18538e",
    measurementId: "G-H777BJRDYT"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
















// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });



// database.ref('notes').push({
//     title: 'Course topics',
//     body: 'Node, React'
// });

// database.ref('notes/-MIoGbk3YEY1aZyUMRQ7').remove();

// database.ref('expenses').push({
//     description: 'Desc1',
//     note: '',
//     amount: 1500
// });

// database.ref('expenses').push({
//     description: 'Desc4',
//     note: 'asdasd',
//     amount: 2222
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });







// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();console.log(snapshot.key, snapshot.val());, error)
// });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// setTimeout(() => {
//     database.ref('age').set(33);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(35);
// }, 10500);





// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log("val", val)
//     }).catch((error) => {
//         console.log("error", error);
//     });

// database.ref().set({
//     name: 'Tim',
//     age: '32',
//     streeeLevel: 6,
//     job: {
//         title: 'Software Dev',
//         company: 'Google'
//     },
//     location: {
//         city: 'Vancouver',
//         country: "Canada"
//     },
//     profession: 'Full-Stack Developer',
// }).then(() => {
//     console.log('Data is saved');
// }).catch((error) => {
//     console.log("error", error);
// });

// database.ref().update({
//     streeeLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// }).then(() => {
//     console.log('Data is updated');
// }).catch((error) => {
//     console.log("error", error);
// });

// Update
// database.ref().update({
//     name: 'Mara', // change
//     age: 33, // change
//     degree: 'Computer Sciense',// Update to add new data
//     isSingle: null// Update to delet data
// }).then(() => {
//     console.log('Data is saved');
// }).catch((error) => {
//     console.log("error", error);
// });

// Update2
// database.ref().update({
//     job: 'Web Dev',
//     'location/city': 'Munich'
// }).then(() => {
//     console.log('Data is saved');
// }).catch((error) => {
//     console.log("error", error);
// });

//  Remove
// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data is removed');
//     }).catch((error) => {
//         console.log("error", error);
//     });

// Remove with set(null)
// database.ref('isSingle')
//     .set(null)
//     .then(() => {
//         console.log('Data is removed');
//     }).catch((error) => {
//         console.log("error", error);
//     });