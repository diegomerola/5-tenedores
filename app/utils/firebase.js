import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCYvzDuvrql4nUN7XWUAfyqWWO92brJ3Xc",
  authDomain: "tenedores-8a6b9.firebaseapp.com",
  projectId: "tenedores-8a6b9",
  storageBucket: "tenedores-8a6b9.appspot.com",
  messagingSenderId: "387448430971",
  appId: "1:387448430971:web:121479da6409b5ad095dde",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
