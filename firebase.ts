// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHE1-NNIeHCYYaST-OmTBGNtEXLhxAzXs",
  authDomain: "netflix-clone-1ff14.firebaseapp.com",
  projectId: "netflix-clone-1ff14",
  storageBucket: "netflix-clone-1ff14.appspot.com",
  messagingSenderId: "484548035349",
  appId: "1:484548035349:web:6410a4a0a58f9739691f1c",
  measurementId: "G-3Y20FM855L"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }