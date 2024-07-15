import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDan_2uOe-WO8ECLQQ2834eqPsnI_rndos",
  authDomain: "miniblog-8bee4.firebaseapp.com",
  projectId: "miniblog-8bee4",
  storageBucket: "miniblog-8bee4.appspot.com",
  messagingSenderId: "92906332407",
  appId: "1:92906332407:web:a395ce64815422b7edf3f2"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const auth = getAuth(app)

export {db, auth}