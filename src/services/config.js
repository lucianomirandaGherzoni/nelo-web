import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfkVPeGAfTRmkYqUMEEPZehbcMq8ZswKU",
  authDomain: "neloworks-db.firebaseapp.com",
  projectId: "neloworks-db",
  storageBucket: "neloworks-db.appspot.com",
  messagingSenderId: "433410571359",
  appId: "1:433410571359:web:f4dfd2d89642f2738e6fea"
};
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 