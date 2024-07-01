// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHEGrMr2S-sNtMxYuhJ8s-BVqlewYe9f4",
  authDomain: "tobi-s-project.firebaseapp.com",
  projectId: "tobi-s-project",
  storageBucket: "tobi-s-project.appspot.com",
  messagingSenderId: "1011964726211",
  appId: "1:1011964726211:web:e98f8ecb317fd4092f8b76",
  measurementId: "G-J9WL7FLF05" ,
  databaseURL:'https://tobi-s-project-default-rtdb.firebaseio.com'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
