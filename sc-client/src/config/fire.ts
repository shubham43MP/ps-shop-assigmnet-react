import { FirebaseApp, initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, User, signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'

const firebaseConfig = {
  apiKey: 'AIzaSyAEQfmztmIZ76v_rr4wOsKwKUSqG-I372M',
  authDomain: 'shopping-cart-applicatio-471af.firebaseapp.com',
  projectId: 'shopping-cart-applicatio-471af',
  storageBucket: 'shopping-cart-applicatio-471af.appspot.com',
  messagingSenderId: '906910438051',
  appId: '1:906910438051:web:1c18c34f565518e462a516',
  measurementId: 'G-TY2FZGQMLZ'
};

const app = initializeApp(firebaseConfig)
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