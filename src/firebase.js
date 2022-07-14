import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLoNukBh0FLYWVzPPlckhwsGiAWRd0zfY",
  authDomain: "linkedin-clone27.firebaseapp.com",
  projectId: "linkedin-clone27",
  storageBucket: "linkedin-clone27.appspot.com",
  messagingSenderId: "335832937398",
  appId: "1:335832937398:web:a9a7f04004c019ef81c717",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
