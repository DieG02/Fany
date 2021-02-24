import firebase from 'firebase'
import 'firebsae/firestore'

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCI7zk6v7Qh0R2RcXDV234E-XaLu7MouHg",
  authDomain: "fany-27092020.firebaseapp.com",
  projectId: "fany-27092020",
  storageBucket: "fany-27092020.appspot.com",
  messagingSenderId: "344884426780",
  appId: "1:344884426780:web:38482830af2ef38c9307d9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
}