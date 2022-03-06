import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: 'AIzaSyCfphucdksdWH1-jtlB9VGV0NEGTEDMFa0',
    authDomain: 'crown-db-30b16.firebaseapp.com',
    projectId: 'crown-db-30b16',
    storageBucket: 'crown-db-30b16.appspot.com',
    messagingSenderId: '249677478600',
    appId: '1:249677478600:web:a7d53acb63ed33ddeb43fd',
    measurementId: 'G-P27XH82SDP'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
