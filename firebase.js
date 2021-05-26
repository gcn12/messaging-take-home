import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBW6H39MCKKxVmSWEo40Di3IE2C3MAouZQ",
    authDomain: "messaging-e2002.firebaseapp.com",
    projectId: "messaging-e2002",
    storageBucket: "messaging-e2002.appspot.com",
    messagingSenderId: "451672172838",
    appId: "1:451672172838:web:c0bbfb0849380993e439e7",
    measurementId: "G-31LY3NEQPJ"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}else {
    firebase.app()
}

const db = firebase.firestore()
export { db };