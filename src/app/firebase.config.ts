// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBCx3VLGNyUsnhBVNk5j8lLCOnLU5uQaLc",
  authDomain: "angular14-myproject.firebaseapp.com",
  projectId: "angular14-myproject",
  storageBucket: "angular14-myproject.appspot.com",
  messagingSenderId: "1044806795814",
  appId: "1:1044806795814:web:65897d8c61b344c051dce7"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);