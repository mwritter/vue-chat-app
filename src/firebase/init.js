import firebase from "firebase/app";
import "firebase/app";
import firestore from "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDbHlZD0D24ty9FcbUxww8DXpaWZywqDTA",
  authDomain: "chat-app-ef206.firebaseapp.com",
  databaseURL: "https://chat-app-ef206.firebaseio.com",
  projectId: "chat-app-ef206",
  storageBucket: "chat-app-ef206.appspot.com",
  messagingSenderId: "775491232714"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
