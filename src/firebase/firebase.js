// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_DhCAu2X-X5orIIcesNnK0_oUT2Bnl3U",
  authDomain: "netflix-d70ab.firebaseapp.com",
  projectId: "netflix-d70ab",
  storageBucket: "netflix-d70ab.appspot.com",
  messagingSenderId: "663773162835",
  appId: "1:663773162835:web:bf37c7ff2f4a88e60cc5a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()