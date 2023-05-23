import firebase from "../../utils/firebase";
import initializeStripe from "./initializeStripe";

export async function createCheckoutSession(uid : string) {
  const firestore = firebase.firestore();
  const checkoutSessionRef = await firestore
    .collection("users")
    .doc(uid)
    .collection("checkout_sessions")
    .add({
      price: "price_1N2NClFvvllEcMk0KWQO3qZ2",
      success_url: window.location.origin,
      cancel_url: window.location.origin
    });
    checkoutSessionRef.onSnapshot(async (snap: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>) => {
      const sessionId = snap.data()?.sessionId;
  
      if (sessionId) {
        const stripe = await initializeStripe();
  
        stripe?.redirectToCheckout(sessionId);
      }
    });
}
