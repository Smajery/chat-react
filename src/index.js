import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyCrd1-bFBLFHClyBJOahJEtCj1vb6il3CU',
  authDomain: 'react-chat-f90d3.firebaseapp.com',
  projectId: 'react-chat-f90d3',
  storageBucket: 'react-chat-f90d3.appspot.com',
  messagingSenderId: '49624079698',
  appId: '1:49624079698:web:c5afab479fcb5ffdc6ae8b',
  measurementId: 'G-KH87VGJS81'
})
export const Context = createContext(null)
const auth = firebase.auth()
const firestore = firebase.firestore()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Context.Provider value={{
    auth,
    firestore,
    firebase
  }}
  >
    <App/>
  </Context.Provider>
)

