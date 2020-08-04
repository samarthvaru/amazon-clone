import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC_OEooI7P9mNgN0RNkgJRQqZ9TWxJF1is",
    authDomain: "clone-a271a.firebaseapp.com",
    databaseURL: "https://clone-a271a.firebaseio.com",
    projectId: "clone-a271a",
    storageBucket: "clone-a271a.appspot.com",
    messagingSenderId: "539590043938",
    appId: "1:539590043938:web:52e75e1385548842285d7b",
    measurementId: "G-HNMED95ZH2"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };