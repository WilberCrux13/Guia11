import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx0sgsUEOXothW_n6zCKdHNeWU3eAsIlw",
  authDomain: "birthday-db5b6.firebaseapp.com",
  projectId: "birthday-db5b6",
  storageBucket: "birthday-db5b6.appspot.com",
  messagingSenderId: "1058476682635",
  appId: "1:1058476682635:web:e596173a8a2497f278938e"
};

firebase.initializeApp(firebaseConfig);

export default firebase;