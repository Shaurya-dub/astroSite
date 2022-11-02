import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBQeYC2GMBbqH2nvwZPy1txYqqlTrVWP3s",
    authDomain: "astrosite-9a909.firebaseapp.com",
    projectId: "astrosite-9a909",
    storageBucket: "astrosite-9a909.appspot.com",
    messagingSenderId: "318718279450",
    appId: "1:318718279450:web:393a2ceb95ccab43d236a3",
  })
  .auth();
