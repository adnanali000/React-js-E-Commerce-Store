import firebase from 'firebase/compat/app';
import {getFirestore} from '@firebase/firestore';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey:process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: "pak-tour-admin.firebaseapp.com",
    projectId: "pak-tour-admin",
    storageBucket: "pak-tour-admin.appspot.com",
    messagingSenderId: "200012386492",
    appId: "1:200012386492:web:54927f16ef84bb99e200b9"
  };

  
const app = firebase.initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const storage = getStorage(app);

export {fireDb,storage}