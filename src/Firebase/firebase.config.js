import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPPNKPNovyRtxDbKScel4BwcZizzjHPE4",
  authDomain: "aurora-ph.firebaseapp.com",
  projectId: "aurora-ph",
  storageBucket: "aurora-ph.appspot.com",
  messagingSenderId: "283121939316",
  appId: "1:283121939316:web:e2b1ac07b4c9cf5f78b221",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
