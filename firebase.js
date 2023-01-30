// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_ePxCkQ2adXGX47R5SIcVSaPuuu4GLMA",
  authDomain: "instagram-clone-e34fb.firebaseapp.com",
  projectId: "instagram-clone-e34fb",
  storageBucket: "instagram-clone-e34fb.appspot.com",
  messagingSenderId: "518971360167",
  appId: "1:518971360167:web:9f1f8035c90eb4a1552c82",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
