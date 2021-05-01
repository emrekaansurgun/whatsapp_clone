// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBG0nm2SDYrZZDyyI2WxLf35CSQM2zTNGU",
    authDomain: "whatsapp-clone-b5977.firebaseapp.com",
    projectId: "whatsapp-clone-b5977",
    storageBucket: "whatsapp-clone-b5977.appspot.com",
    messagingSenderId: "363804577669",
    appId: "1:363804577669:web:0735e6ef6964c78a427eec",
    measurementId: "G-H1EWP0RHWF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;