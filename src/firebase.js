import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBZpowipEBlj62B3tQjpPrgkG4axhtcx0Y",
    authDomain: "how2grad-4203b.firebaseapp.com",
    databaseURL: "https://how2grad-4203b.firebaseio.com",
    projectId: "how2grad-4203b",
    storageBucket: "how2grad-4203b.appspot.com",
    messagingSenderId: "767995742435",
    appId: "1:767995742435:web:496fccc95ed5095d135dd6",
    measurementId: "G-9RX39V179P"
});

export const db = firebaseApp.firestore();
