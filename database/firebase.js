import firebase from 'firebase'
import 'firebase/firestore'
import { FIREBASE_KEY, PROJECT_FIRESBASE_ID } from '@env'

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "fany-27092020.firebaseapp.com",
  projectId: PROJECT_FIRESBASE_ID,
  storageBucket: "fany-27092020.appspot.com",
  messagingSenderId: "344884426780",
  appId: "1:344884426780:web:38482830af2ef38c9307d9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
}