import firebase from 'firebase/compat/app'
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyDRklZp4sXoF-0SznIXYCVSGbb8Eyw4Y74",
    authDomain: "vuecrud-e036c.firebaseapp.com",
    projectId: "vuecrud-e036c",
    storageBucket: "vuecrud-e036c.appspot.com",
    messagingSenderId: "313795819211",
    appId: "1:313795819211:web:2534678357da9f0a6b8d4e",
    measurementId: "G-VT7SQKYVJR"
  })


export default firebase.database();