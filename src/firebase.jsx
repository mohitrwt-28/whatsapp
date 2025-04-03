import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqiZRrUj6zPWvGSPMzyiqQSyA8GNGvtGo",
  authDomain: "chat-application-30677.firebaseapp.com",
  projectId: "chat-application-30677",
  storageBucket: "chat-application-30677.firebasestorage.app",
  messagingSenderId: "116870137662",
  appId: "1:116870137662:web:c5be38056ee3ffd4f9ce6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
