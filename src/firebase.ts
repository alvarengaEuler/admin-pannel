import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDYXl_UZSjqfoGFahr1YcQxZg45xxHYizs",
  authDomain: "gamersstore-3af9a.firebaseapp.com",
  projectId: "gamersstore-3af9a",
  storageBucket: "gamersstore-3af9a.appspot.com",
  messagingSenderId: "702150534256",
  appId: "1:702150534256:web:754e4139e234e4199a80b5",
  measurementId: "G-X5VNCN98Z7"
});

export const auth = app.auth();
export default app;


  //   apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID,