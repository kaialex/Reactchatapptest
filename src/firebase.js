import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcDpHoSmz1-3JeGGeYAjVyjz77sNFnuyc",
  authDomain: "chat-test-db03c.firebaseapp.com",
  projectId: "chat-test-db03c",
  storageBucket: "chat-test-db03c.appspot.com",
  messagingSenderId: "141447931924",
  appId: "1:141447931924:web:cce99d42001fb49e389f01",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
