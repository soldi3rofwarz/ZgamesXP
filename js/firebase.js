
import { initializeApp } from "firebase/app";
import {getFirestore, collection,getDocs} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCW_Hi0SUmFUVImB4IyUa7bjfJmvr2a2jw",
  authDomain: "sinistertown-e1b6f.firebaseapp.com",
  projectId: "sinistertown-e1b6f",
  storageBucket: "sinistertown-e1b6f.appspot.com",
  messagingSenderId: "630867675696",
  appId: "1:630867675696:web:948c52323923408aa9fbf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
db.collection("Historias").getDocs()
const colecciones = collection(db, "Historias")
const snapshot = await getDocs(colecciones)

