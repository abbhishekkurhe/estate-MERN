// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernestate-6faf6.firebaseapp.com",
  projectId: "mernestate-6faf6",
  storageBucket: "mernestate-6faf6.firebasestorage.app",
  messagingSenderId: "645827125587",
  appId: "1:645827125587:web:3b89e6eda961b9877541a6",
  measurementId: "G-61HPWSRZW0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);