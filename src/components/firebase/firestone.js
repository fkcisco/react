// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi9HSH8RXGvcYnCPbwpEyjssaue8fA72Q",
  authDomain: "tienda-nano.firebaseapp.com",
  projectId: "tienda-nano",
  storageBucket: "tienda-nano.appspot.com",
  messagingSenderId: "855863766234",
  appId: "1:855863766234:web:02f378a741f7233f0bc9e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const getFirestoreApp = () => {
    return app;
}

export default getFirestoreApp
