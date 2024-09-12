// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDNkiGth4XJeIZWT8cHzXi5AL0eDq4JZQc",
	authDomain: "blogging-app-55790.firebaseapp.com",
	projectId: "blogging-app-55790",
	storageBucket: "blogging-app-55790.appspot.com",
	messagingSenderId: "114652686402",
	appId: "1:114652686402:web:ecb82990f74f79f599a5db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
