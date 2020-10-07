import { firebase } from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';
import { config } from '../config/firebase';

firebase.initializeApp(config);
let store = firebase.firestore();

export const auth = firebase.auth();

export const testConnection = () => {
    console.log('testing connection with firebase');
    return store
        .collection('test')
        .doc('55vz4SGF6qTgmXyfTRix')
        .get()
        .then(
        doc => {
            console.log({doc});
            return doc
            ? { result : {...doc.data()} }
            : {}
        }).catch(e => {
            console.log('Error connecting to firebase');
            console.error(e);
        });
}
            
