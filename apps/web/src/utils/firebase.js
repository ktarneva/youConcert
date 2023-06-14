import dotenv from 'dotenv';
dotenv.config();

import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import * as functions from 'firebase-functions'
  
const firebaseConfig = require('config')
(functions.config().config.api_key)
(functions.config().config.project_id)
(functions.config().config.app_id)
(functions.config().config.measurement_id)
(functions.config().config.auth_domain)
(functions.config().config.messaging_sender_id)
(functions.config().config.storage_bucket)

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
