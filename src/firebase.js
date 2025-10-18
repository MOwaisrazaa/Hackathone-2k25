import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwslRvoecQRiV_nftkKe6a7B98AzTZvi0",
  authDomain: "hackathone-c4315.firebaseapp.com",
  projectId: "hackathone-c4315",
  storageBucket: "hackathone-c4315.firebasestorage.app",
  messagingSenderId: "1050437106755",
  appId: "1:1050437106755:web:1971db213358f537a768f6",
  measurementId: "G-8RCNQB8HDY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);