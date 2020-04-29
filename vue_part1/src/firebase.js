import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDlo6OHSEMthuKESzTK3YrDK9DkJKzOnHo',
  authDomain: 'vue-part1-4cfcf.firebaseapp.com',
  databaseURL: 'https://vue-part1-4cfcf.firebaseio.com',
  projectId: 'vue-part1-4cfcf',
  storageBucket: 'vue-part1-4cfcf.appspot.com',
  messagingSenderId: '65254315212',
  appId: '1:65254315212:web:6891a034458268ab31de69',
};

firebase.initializeApp(config);
// firebase.analytics();

const db = firebase.firestore();

export const dbTodoRef = db.collection('todos');
