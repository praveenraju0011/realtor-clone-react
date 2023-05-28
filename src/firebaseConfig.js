


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCprse8upfQPBBJ5780kYj5Lz9rwfnjxfk",
  authDomain: "realtor-clone-react-4fa86.firebaseapp.com",
  projectId: "realtor-clone-react-4fa86",
  storageBucket: "realtor-clone-react-4fa86.appspot.com",
  messagingSenderId: "515765575934",
  appId: "1:515765575934:web:34d10a14f35ad65c1685af"
};

// Initialize Firebase

initializeApp(firebaseConfig);

//exporting
export const db = getFirestore();