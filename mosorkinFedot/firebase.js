import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLM0CP0W4AKozML45pEAJmNb5wmSHQqJM",
  authDomain: "mobdevmosorkin2023.firebaseapp.com",
  projectId: "mobdevmosorkin2023",
  storageBucket: "mobdevmosorkin2023.appspot.com",
  messagingSenderId: "580987895715",
  appId: "1:580987895715:web:26281d53f6a9c8404fe416",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const db = firebase.firestore();
export { auth, db };
