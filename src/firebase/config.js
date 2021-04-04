import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCYPsVqbV0ekZ2ockoErxT4YoVWG-aPL5U",
    authDomain: "react-gabhs196.firebaseapp.com",
    databaseURL: "https://react-gabhs196-default-rtdb.firebaseio.com",
    projectId: "react-gabhs196",
    storageBucket: "react-gabhs196.appspot.com",
    messagingSenderId: "812353467705",
    appId: "1:812353467705:web:866a8a0e8790ef8ceb24e8",
    measurementId: "G-H2TG89R89R"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp,projectFirestore as default };