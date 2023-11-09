// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2TGfbS8C0kkOdUjl6-wQFXtiLhIV7Vz0",
  authDomain: "firebas-auth-42126.firebaseapp.com",
  projectId: "firebas-auth-42126",
  storageBucket: "firebas-auth-42126.appspot.com",
  messagingSenderId: "595510543711",
  appId: "1:595510543711:web:347042a294f5bbfac822ea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
