import firebase from 'firebase'
import Google from 'expo-google-app-auth'
import 'firebase/firestore'

const FIREBASE_KEY = process.env.FIREBASE_KEY,
      PROJECT_FIRESBASE_ID = process.env.PROJECT_FIRESBASE_ID,
      ANDROID_CLIENT_ID = process.env.ANDROID_CLIENT_ID

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "fany-27092020.firebaseapp.com",
  projectId: PROJECT_FIRESBASE_ID,
  storageBucket: "fany-27092020.appspot.com",
  messagingSenderId: "344884426780",
  appId: "1:344884426780:web:38482830af2ef38c9307d9",
};


if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig) // Initialize Firebase
} else {
   firebase.app(); // If already initialized, use that one
}

// Suscribe to firestore database
export const db = firebase.firestore();



// localSignUp
export const localSignUp = async ({ email, password }, navigation) => {
  if(email.length < 0) return alert('Please provide a email');
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    setTimeout(() => {
      navigation.push('MyTabBar')
    }, 1000)

  } catch(error) {
    return console.log(error.toString())
  }
}

// localLogIn
export const localLogIn = async ({ email, password }) => {
  if(email.length < 0) return alert('Please provide a email');

  try {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    const session = await firebase.auth().signInWithEmailAndPassword(email, password)
    return {
      code: 200,
      user: session.user
    };
  } 
  catch {
    // Handle Errors here.
    return {
      code: 404,
      errorMessage: 'El email o la contraseña son incorrectos'
    }
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
