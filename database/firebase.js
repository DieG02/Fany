import * as firebase from 'firebase'
import * as Google from 'expo-google-app-auth'
import 'firebase/firestore'
import { FIREBASE_KEY, PROJECT_FIRESBASE_ID, ANDROID_CLIENT_ID } from '@env'

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
export default firebase.initializeApp(firebaseConfig);


// Suscribe to firestore database
export const db = firebase.firestore();



// localSignUp
export const localSignUp = async (input, navigation) => {
  if(input.email === '') return alert('Please provide a email');
  console.log(input)

  try {
    await firebase.auth().createUserWithEmailAndPassword(input.email, input.password)
    setTimeout(() => {
      navigation.navigate('MyTabBar')
    }, 1000)

  } catch(error) {
    return console.log(error.toString())
  }
}

// localLogIn
export const localLogIn = async (input, navigation) => {
  if(input.email === '') return alert('Please provide a email');
  console.log(input)

  try {
    await firebase.auth().signInWithEmailAndPassword(input.email, input.password)
    setTimeout(() => {
      navigation.navigate('MyTabBar')
    }, 1000)

  } catch(error) {
    return console.log(error.toString())
  }
}


// googleSignIn
export const googleSignIn = async ( navigation ) => {

  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(result => {
    console.log(result)
    navigation.navigate('MyTabBar')
  })
  .catch(err => {
    console.log(err)
  })
}



export const signInWithGoogleAsync = async ( navigation ) => {
  try {
    const result = await Google.logInAsync({
      androidClientId: ANDROID_CLIENT_ID,
      // iosClientId: IOS_CLIENT_ID,
      scopes: ['profile', 'email'],
    });
    console.log(result)
    if (result.type === 'success') {
      navigation.navigate('MyTabBar');
      result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
}
