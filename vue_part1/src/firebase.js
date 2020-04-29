import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {};

firebase.initializeApp(config);
// firebase.analytics();

const db = firebase.firestore();

export const dbTodoRef = db.collection('todos');
