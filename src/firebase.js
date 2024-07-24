import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithCredential} from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import{addDoc , collection , getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCTdVDwMUhW3rJNorujJlb7AAby8ehD_PE",
  authDomain: "netflix-clone-a0fc2.firebaseapp.com",
  projectId: "netflix-clone-a0fc2",
  storageBucket: "netflix-clone-a0fc2.appspot.com",
  messagingSenderId: "145239510669",
  appId: "1:145239510669:web:945116b9b953e4edefdcc4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

const signup = async (name,email,password)=>{
   try {
      const res = await createUserWithEmailAndPassword(auth,email,password)
      const user = res.user;
      await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email,
      })
   } catch (error) {
       console.log(error)
       alert(error)
   }
}

const login = async (email,password)=>{
      try {
        signInWith
      } catch (error) {
        
      }
}