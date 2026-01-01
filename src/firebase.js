
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAG38hzeuuo9gskxhYkaPtI29y_w8T2Eus",
  authDomain: "hackathon-e35ec.firebaseapp.com",
  projectId: "hackathon-e35ec",
  storageBucket: "hackathon-e35ec.firebasestorage.app",
  messagingSenderId: "843073046790",
  appId: "1:843073046790:web:4361922644764657ce7687",
  measurementId: "G-PY1T8BXWV7"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const db = getFirestore(app);
