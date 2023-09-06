import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7PU7HhX2qU61uOFPgxKrNYOcY7WiEKFs",
  authDomain: "music-8b6ee.firebaseapp.com",
  projectId: "music-8b6ee",
  storageBucket: "music-8b6ee.appspot.com",
  messagingSenderId: "764612299549",
  appId: "1:764612299549:web:d68c15f73bfc23608faff4",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  storage,
  songsCollection,
  commentsCollection,
};
