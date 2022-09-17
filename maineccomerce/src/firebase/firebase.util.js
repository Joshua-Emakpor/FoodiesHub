import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
     apiKey: "AIzaSyBev6goIgiku1Ub1mmp7ldywacjS8IZAQY",
     authDomain: "foodieshub-261ca.firebaseapp.com",
     projectId: "foodieshub-261ca",
     storageBucket: "foodieshub-261ca.appspot.com",
     messagingSenderId: "312774798686",
     appId: "1:312774798686:web:8ccd64ee450bb5c871f3cf",
     measurementId: "G-VW7H6E0MQ5"
   };

   firebase.initializeApp(firebaseConfig)

   const firestore = firebase.firestore()
    const auth = firebase.auth()

   const provider = new firebase.auth.GoogleAuthProvider()
   provider.setCustomParameters({ prompt: 'select_account'})
   export const signInWithGoogle = () => auth.signInWithPopup(provider)

   export  {auth, firestore}