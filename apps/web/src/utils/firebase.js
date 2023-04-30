import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDr-tR_PPlw-wJloscqvJh6UdASGxgezxI",
  authDomain: "youconcert-6f0da.firebaseapp.com",
  projectId: "youconcert-6f0da",
  storageBucket: "youconcert-6f0da.appspot.com",
  messagingSenderId: "44622300826",
  appId: "1:44622300826:web:a2695c3985f7650c574123",
  measurementId: "G-TYKY9THD86",
};

// Use this to initialize the firebase App
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();

/// Helper functions

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

export default firebase;
