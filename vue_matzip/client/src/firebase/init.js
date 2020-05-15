import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const config = {
  apiKey: process.env.VUE_APP_apiKey || "",
  authDomain: process.env.VUE_APP_authDomain || "",
  databaseURL: process.env.VUE_APP_databaseURL || "",
  projectId: process.env.VUE_APP_projectId || "",
  storageBucket: process.env.VUE_APP_storageBucket || "",
  messagingSenderId: process.env.VUE_APP_messagingSenderId || "",
  appId: process.env.VUE_APP_appId || "",
  measurementId: process.env.VUE_APP_measurementId || "",
};

const firebaseApp = firebase.initializeApp(config);

// export firestore database
export const firebaseAuth = firebase.auth();
export default firebaseApp.firestore();
