import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDXRR0uLYPuAzvcl0PgJUTOpkiQ-Dktvac",
  authDomain: "biblioteca-d9f59.firebaseapp.com",
  projectId: "biblioteca-d9f59",
  storageBucket: "biblioteca-d9f59.appspot.com",
  messagingSenderId: "811137304869",
  appId: "1:811137304869:web:2b4a0086734784c84672cc"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
