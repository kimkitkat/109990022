import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"


const firebaseConfig = {
  apiKey: "AIzaSyAe3ncubb3Iw3KfUJ8lCbV3eUOEkmvyqwU",
  authDomain: "ntut-web-by-ymk-lab10.firebaseapp.com",
  databaseURL:"https://ntut-web-by-ymk-lab10-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ntut-web-by-ymk-lab10",
  storageBucket: "ntut-web-by-ymk-lab10.appspot.com",
  messagingSenderId: "294387243207",
  appId: "1:294387243207:web:2be9008e432c63d0f006e2",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
