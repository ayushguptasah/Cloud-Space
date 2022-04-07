import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA7YvqJxGOk5GTbQrKqwUtOX5dNbpAeMdI",
  authDomain: "cloud-space-c16b5.firebaseapp.com",
  projectId: "cloud-space-c16b5",
  storageBucket: "cloud-space-c16b5.appspot.com",
  messagingSenderId: "53656838200",
  appId: "1:53656838200:web:8c3d8ccfe6f1a473d806cd",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();
const db = firebaseApp.firestore();

export { auth, provider, db, storage };
