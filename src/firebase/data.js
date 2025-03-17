// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDig-nWExS0PvQtWwVz_BYpHLBGH7LT7F0",
  authDomain: "vision-ag-tienda.firebaseapp.com",
  projectId: "vision-ag-tienda",
  storageBucket: "vision-ag-tienda.firebasestorage.app",
  messagingSenderId: "82221135153",
  appId: "1:82221135153:web:13a944955fb55df5422c10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


