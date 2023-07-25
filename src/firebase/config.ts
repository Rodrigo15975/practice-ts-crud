import { initializeApp } from "firebase/app";

import { getFirestore   } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSobNFU-J63rGLvyNcl3vZODSyffH53UY",
  authDomain: "loginproviders-7c47b.firebaseapp.com",
  databaseURL: "https://loginproviders-7c47b-default-rtdb.firebaseio.com",
  projectId: "loginproviders-7c47b",
  storageBucket: "loginproviders-7c47b.appspot.com",
  messagingSenderId: "482779632394",
  appId: "1:482779632394:web:c81a0814e59a8dd32e60f3",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
