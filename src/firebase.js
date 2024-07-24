import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import{addDoc , collection , getFirestore} from "firebase/firestore"
import { toast } from "react-toastify";
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
       toast.error(error.code.split("/")[1].split("-").join(" "));
   }
}

const login = async (email,password)=>{
      console.log("gjuieiei")
      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error) {
        console.log(error)
        toast.error(error.code.split("/")[1].split("-").join(" "))
      }
}

const logout = ()=>{
    signOut(auth);
} 

export{auth, db , login, signup , logout};