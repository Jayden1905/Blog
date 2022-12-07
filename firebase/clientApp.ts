import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const clientCredentials = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  apiKey: "AIzaSyC8vlBzGRSHEWQILELI6s7Ett8DhXewnKo",
  authDomain: "journey-4b2c7.firebaseapp.com",
  projectId: "journey-4b2c7",
  storageBucket: "journey-4b2c7.appspot.com",
  messagingSenderId: "834548505534",
  appId: "1:834548505534:web:b7b8dca7c9a06d5821b7ef",
  measurementId: "G-7RJH440V3K",
};

const app = initializeApp(clientCredentials);

const db = getFirestore(app);

export default db;
