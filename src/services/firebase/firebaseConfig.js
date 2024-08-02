import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3GTNRHKga9fW3p58b_3PpQ2fhU8r81Us",
  authDomain: "proyecto-ecommerce-6c56e.firebaseapp.com",
  projectId: "proyecto-ecommerce-6c56e",
  storageBucket: "proyecto-ecommerce-6c56e.appspot.com",
  messagingSenderId: "669237819697",
  appId: "1:669237819697:web:0a5b079fdd4352b8fbd810"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);