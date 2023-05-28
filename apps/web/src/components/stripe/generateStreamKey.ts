import { useEffect, useState } from "react";
import firebase from "../../utils/firebase";
import isUserBasic from "./isUserBasic";
import { v4 as uuidv4 } from "uuid";

// Get a Firestore instance
const db = firebase.firestore();

// Function to generate a random stream key
function generateStreamKey() {
    // Generate a random string
    return uuidv4();
  }

// Function to add a stream key to the user document
export async function addStreamKeyToUser(user: firebase.User){
    const streamKey = generateStreamKey(); 
    await db.collection("users").doc(user.uid).update({
      streamKey: streamKey,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log(`Stream key generated and added to user with ID: ${user.uid}`);
  };



