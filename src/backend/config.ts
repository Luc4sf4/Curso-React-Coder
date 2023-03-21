
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDQqqAVt2ynJ38ZtyneM3aO_t2-2--kxhk",
  authDomain: "next-crud-ed2c1.firebaseapp.com",
  projectId: "next-crud-ed2c1",
  storageBucket: "next-crud-ed2c1.appspot.com",
  messagingSenderId: "725518381036",
  appId: "1:725518381036:web:9c50aba5cf2644c9209ac9"
};

  
 export const app = initializeApp(firebaseConfig);
  console.log("conection",app) 
 export const db = getFirestore();

  