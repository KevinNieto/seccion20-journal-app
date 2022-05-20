
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp }   from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZPHejFlmG-HRZ0kYVvviL85_tLIBv3YQ",
  authDomain: "react-app-cursos-45d8e.firebaseapp.com",
  projectId: "react-app-cursos-45d8e",
  storageBucket: "react-app-cursos-45d8e.appspot.com",
  messagingSenderId: "60220027152",
  appId: "1:60220027152:web:829fd78cc6a9d7c0837595"
};

// Initialize Firebase
export const  app= initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider()
export const db  =  getFirestore(app);


