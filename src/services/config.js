import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "berlinipastas-db.firebaseapp.com",
    projectId: "berlinipastas-db",
    storageBucket: "berlinipastas-db.appspot.com",
    messagingSenderId: "587616245643",
    appId: "1:587616245643:web:d32ea910d27ea4d5f4418e"
  };
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);