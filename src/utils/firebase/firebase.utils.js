// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_ELIH-nZ6giM9WjJhK6jlRcRqimxAIwA",
  authDomain: "e-commerce-60c81.firebaseapp.com",
  projectId: "e-commerce-60c81",
  storageBucket: "e-commerce-60c81.appspot.com",
  messagingSenderId: "709946926817",
  appId: "1:709946926817:web:80e7ce2e54cbfbad3cf9a0",
  measurementId: "G-36KK8VVS6G"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup =  () => signInWithPopup(auth,  provider)

