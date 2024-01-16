// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDS_l4DpKhkCfg26DidLa10j_RpCyqQuh0",
  authDomain: "userdashboard-3afc2.firebaseapp.com",
  projectId: "userdashboard-3afc2",
  storageBucket: "userdashboard-3afc2.appspot.com",
  messagingSenderId: "101965061135",
  appId: "1:101965061135:web:d52f063f0ee1cbd18bd77a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const firestore = getFirestore(app);
 export{auth}
 export{firestore}

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app)
// export { db } 



