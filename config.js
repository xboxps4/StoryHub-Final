import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAgUUBdNFUzJNSSh0b9l-LTXMjzalu4It0",
    authDomain: "story-hub-v2.firebaseapp.com",
    projectId: "story-hub-v2",
    storageBucket: "story-hub-v2.appspot.com",
    messagingSenderId: "466049168668",
    appId: "1:466049168668:web:bc59d2c03fcc9902dd76d9"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   