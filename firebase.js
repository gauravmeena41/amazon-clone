import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAA2RjPqBkL0e66y-HJbFLomZhKWzPxmto",
  authDomain: "clone-95bca.firebaseapp.com",
  projectId: "clone-95bca",
  storageBucket: "clone-95bca.appspot.com",
  messagingSenderId: "480703005396",
  appId: "1:480703005396:web:4d49940074ffad9f7b3141",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
