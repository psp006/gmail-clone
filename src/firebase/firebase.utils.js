import firebase from 'firebase/app';
import  'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBghY8Lxkg8yC1jb14OGkxS8o0AImm_uuA",
    authDomain: "clone-11cac.firebaseapp.com",
    projectId: "clone-11cac",
    storageBucket: "clone-11cac.appspot.com",
    messagingSenderId: "514342256497",
    appId: "1:514342256497:web:d52daf0f4a40ab49f200d0",
    measurementId: "G-G803TF9J9W"
}

firebase.initializeApp(config);

const auth = firebase.auth( );
const db = firebase.firestore( );

const provider = new firebase.auth.GoogleAuthProvider( );

export { auth, db, provider };

