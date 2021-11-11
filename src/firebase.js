// Must use firebase/compat/x to import and use these the old way (pre firebase v9)
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// Firebase API info
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAvMfJjEfwFFbfABRiwVhgA8dRAUHL_K3k",
    authDomain: "messaging-app-292aa.firebaseapp.com",
    projectId: "messaging-app-292aa",
    storageBucket: "messaging-app-292aa.appspot.com",
    messagingSenderId: "182252728575",
    appId: "1:182252728575:web:d3a14bf4cb85c42e701cca",
    measurementId: "G-8L550ZH9E0"
})
// Database
const db = firebaseApp.firestore()
// Authorization
const auth = firebase.auth()

export { db, auth }