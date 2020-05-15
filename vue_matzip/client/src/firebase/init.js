import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

console.log(process.env.VUE_APP_FIREBASE_apiKey);

// Initialize Firebase
// const config = {
//   apiKey: "AIzaSyAo6ldITRFMe4nuslHMBcWmbCUwcEYrXfk",
//   authDomain: "vue-matzip.firebaseapp.com",
//   databaseURL: "https://vue-matzip.firebaseio.com",
//   projectId: "vue-matzip",
//   storageBucket: "vue-matzip.appspot.com",
//   messagingSenderId: "45712301989",
//   appId: "1:45712301989:web:5207c10fd0a9969bcc124c",
//   measurementId: "G-RYRE7B52XR",
// };

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
