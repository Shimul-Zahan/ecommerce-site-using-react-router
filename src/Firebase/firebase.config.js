// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCF5q-8qgX8er28EcYbTV25kACDHlmfZow",
    authDomain: "fokinni-bazar-autherntication.firebaseapp.com",
    projectId: "fokinni-bazar-autherntication",
    storageBucket: "fokinni-bazar-autherntication.appspot.com",
    messagingSenderId: "347645240213",
    appId: "1:347645240213:web:ceab1d1c8016e0d7770c9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;