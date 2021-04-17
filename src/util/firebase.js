import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAnCHImrpUKa7xWil5ISzDPUarsZK6jF2g",
    authDomain: "tododaily-e4abc.firebaseapp.com",
    projectId: "tododaily-e4abc",
    storageBucket: "tododaily-e4abc.appspot.com",
    messagingSenderId: "944670748943",
    appId: "1:944670748943:web:e892051f14a3d8e7abce7a",
    measurementId: "G-00H691Z170"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;