import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyD8lferabBx2gujx9KSxXNirh0BR9i-Ty4",
  authDomain: "expensify-42b29.firebaseapp.com",
  databaseURL: "https://expensify-42b29.firebaseio.com",
  projectId: "expensify-42b29",
  storageBucket: "expensify-42b29.appspot.com",
  messagingSenderId: "1033037284684"
};

firebase.initializeApp(config);

const database = firebase.database();

database
  .ref()
  .set({
    name: "Jesse",
    age: 26,
    stressLev: 7,
    job: {
      title: "software dev",
      company: "Google"
    },
    isDude: true,
    location: {
      city: "Kona",
      country: "unfortunately USA"
    }
  })
  .then(() => {
    console.log("data is saved");
  })
  .catch(error => {
    console.log("this failed.", error);
  });

database
  .ref()
  .update({
    "location/city": "Seattle",
    "job/company": "Amazon",
    stressLev: 9
  })
  .then(() => {
    console.log("update is saved");
  })
  .catch(error => {
    console.log("update failed.", error);
  });

// database
//   .ref("isDude")
//   .remove()
//   .then(() => {
//     console.log("Remove success");
//   })
//   .catch(error => {
//     console.log("Remove failed", error);
//   });
