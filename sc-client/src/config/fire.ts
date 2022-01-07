import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User,
  signInWithEmailAndPassword
} from 'firebase/auth'

import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
} from 'apis/constants'
import React from 'react'

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID
};

initializeApp(firebaseConfig)
const auth = getAuth()

export function signup (email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password)
}

export function login (email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password)
}

//Custom hook

export function useAuth() {
  const [ currentUser, setCurrentUser ] = React.useState<User | null>()

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) =>  setCurrentUser(user))
    return unsub;
  }, [])
  return currentUser
}