/* eslint-disable import/no-mutable-exports */
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export let config = {
  apiKey: 'AIzaSyC8f6flWJOWdJAHrOeQzqHIeCVeK1OkWtM',
  authDomain: 'referral-sys.firebaseapp.com',
  projectId: 'referral-sys',
  storageBucket: 'referral-sys.appspot.com',
  messagingSenderId: '509312674963',
  appId: '1:509312674963:web:f61bd1a6992f4993df7166',
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
