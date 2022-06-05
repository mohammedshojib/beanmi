import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8N2vywzwu6qB1B9E_aQGNVTxm2k7PXV4",
  authDomain: "beanmi-71c4e.firebaseapp.com",
  projectId: "beanmi-71c4e",
  storageBucket: "beanmi-71c4e.appspot.com",
  messagingSenderId: "406402589695",
  appId: "1:406402589695:web:6cf251f89b31efc5863dca",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
