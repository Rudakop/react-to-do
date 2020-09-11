import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAqJT68GgpSt_mQkf7Rh4VUSvuVqBFMKj4",
    authDomain: "react-to-do-5b781.firebaseapp.com",
    databaseURL: "https://react-to-do-5b781.firebaseio.com",
    projectId: "react-to-do-5b781",
    storageBucket: "react-to-do-5b781.appspot.com",
    messagingSenderId: "111172466695",
    appId: "1:111172466695:web:2cbb232768ff68ec60d2a2",
    measurementId: "G-3EXK31VPGB"
  };
  //Initialize
firebase.initializeApp(firebaseConfig);

export default firebase