import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAKPCpEjj-Dh_Epj-jJm8OxmRCJwXqSppg",
    authDomain: "tonobila.firebaseapp.com",
    databaseURL: "https://tonobila.firebaseio.com",
    projectId: "tonobila",
    storageBucket: "tonobila.appspot.com",
    messagingSenderId: "1068892624566",
    appId: "1:1068892624566:web:af24147ef3c5f866"
};


firebase.initializeApp(firebaseConfig);


export const provider = new firebase.auth.GoogleAuthProvider(); //provider for google auth
export const faceProvider = new firebase.auth.FacebookAuthProvider(); //provider for facebook auth
//export const emailProvider = new firebase.auth.createUserWithEmailAndPassword(); //provider for email auth

export const auth = firebase.auth();

export default firebase;