import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, getDoc, deleteDoc, getDocs, QueryDocumentSnapshot } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDUal37aYkfMmb75rVArvFKPv4ktGx0WOc",
  authDomain: "prueba-tecnica-89fa8.firebaseapp.com",
  projectId: "prueba-tecnica-89fa8",
  storageBucket: "prueba-tecnica-89fa8.firebasestorage.app",
  messagingSenderId: "1003616981151",
  appId: "1:1003616981151:web:9f1bcb55c9acd0d52e12aa",
  measurementId: "G-4VRJP1DYLE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, doc, setDoc, getDoc, deleteDoc, getDocs, QueryDocumentSnapshot };