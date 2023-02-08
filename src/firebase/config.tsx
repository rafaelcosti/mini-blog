import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBrEcxgIJzGrGj5gSffK8wYYMrg2QZA9LY",
  authDomain: "mini-blog-49f75.firebaseapp.com",
  projectId: "mini-blog-49f75",
  storageBucket: "mini-blog-49f75.appspot.com",
  messagingSenderId: "409945543173",
  appId: "1:409945543173:web:b5af5ba53574f2daf8026c",
  measurementId: "G-XX2DMJ3WX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const analytics = getAnalytics(app);

export { db, app }