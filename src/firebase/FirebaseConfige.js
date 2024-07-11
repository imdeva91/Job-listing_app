import {initializeApp} from "firebase/app"
import {collection, getFirestore} from "firebase/firestore"
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.MODE.API_KEY,
  authDomain: "job-portel-73f9c.firebaseapp.com",
  projectId: "job-portel-73f9c",
  storageBucket: "job-portel-73f9c.appspot.com",
  messagingSenderId: "306048756323",
  appId: "1:306048756323:web:9dd86129c4eec452282656"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

 // Initialize service
export const db = getFirestore(app)

// collection refrence
export const refColl = collection(db,'jobs')
export const serverStamp = firebase.firestore.Timestamp

