// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const config = {
    apiKey: "AIzaSyAeSc9chhZ-ZijeDO7MvRE9vzOBbunAT24",
    authDomain: "crwn-clothing-cbe9d.firebaseapp.com",
    databaseURL: "https://crwn-clothing-cbe9d.firebaseio.com",
    projectId: "crwn-clothing-cbe9d",
    storageBucket: "crwn-clothing-cbe9d.appspot.com",
    messagingSenderId: "814277869835",
    appId: "1:814277869835:web:f8dd060e0bddca4e96620e",
    measurementId: "G-VH7CFN1YQH"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
 