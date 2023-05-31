import { useEffect, useState } from "react";
import firebase from "../../utils/firebase";
import isUserBasic from "./isUserBasic";
import { v4 as uuidv4 } from "uuid";

// Get a Firestore instance
const db = firebase.firestore();
// Function to generate a random stream key
function generateStreamKey() {
  // Generate a random string or use any other technique to create a unique stream key
  return uuidv4();
}
// Function to add a stream key to the user document
async function addStreamKeyToUser(user: firebase.User) {
  const streamKey = generateStreamKey();

  await db.collection("users").doc(user.uid).update({
    streamKey: streamKey,
  });

  console.log(`Stream key generated and added to user with ID: ${user.uid}`);
}
export default function useBasicStatus(user: firebase.User) {
  const [basicStatus, setBasicStatus] = useState < boolean > (false);

  useEffect(() => {
    if (user) {
      const checkBasicStatus = async function () {
        setBasicStatus(await isUserBasic());
      };
      checkBasicStatus();
    }
  }, [user]);
  return basicStatus;
}
