import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCxxcrsoK0tQ2nGNq8-4aRtYqnLx03pmKA",
  authDomain: "catch-of-the-name-peter-aw.firebaseapp.com",
  databaseURL: "https://catch-of-the-name-peter-aw.firebaseio.com",
  projectId: "catch-of-the-name-peter-aw",
  storageBucket: "catch-of-the-name-peter-aw.appspot.com",
  messagingSenderId: "929676877647",
  appId: "1:929676877647:web:5d44f2ca27077440d2ef3a",
  measurementId: "G-FB177Z1N4G"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export.
export { firebaseApp };

// this is a default export.
export default base;
