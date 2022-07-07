import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAUY_InRr9sABUeZpeogC8HHaNBY08bx5Q",
    authDomain: "disney-plus-clone-26e41.firebaseapp.com",
    projectId: "disney-plus-clone-26e41",
    storageBucket: "disney-plus-clone-26e41.appspot.com",
    messagingSenderId: "499730322409",
    appId: "1:499730322409:web:e63a68c6df820ef190f178",
    measurementId: "G-H94CQQRPWE"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = app.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth , provider , storage};