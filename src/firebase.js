import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDS_l4DpKhkCfg26DidLa10j_RpCyqQuh0",
  authDomain: "userdashboard-3afc2.firebaseapp.com",
  projectId: "userdashboard-3afc2",
  storageBucket: "userdashboard-3afc2.appspot.com",
  messagingSenderId: "101965061135",
  appId: "1:101965061135:web:d52f063f0ee1cbd18bd77a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
