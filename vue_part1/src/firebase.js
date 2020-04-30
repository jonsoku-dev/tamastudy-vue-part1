import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: process.env.VUE_APP_apiKey,
  authDomain: process.env.VUE_APP_authDomain,
  databaseURL: process.env.VUE_APP_databaseURL,
  projectId: process.env.VUE_APP_projectId,
  storageBucket: process.env.VUE_APP_storageBucket,
  messagingSenderId: process.env.VUE_APP_messagingSenderId,
  appId: process.env.VUE_APP_appId,
};

firebase.initializeApp(config);
// firebase.analytics();

const db = firebase.firestore();

export const dbTodoRef = db.collection('todos');
