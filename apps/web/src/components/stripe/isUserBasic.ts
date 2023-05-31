import firebase from "../../utils/firebase";

export default async function isUserBasic():Promise<boolean> {
  await firebase.auth().currentUser?.getIdToken(true);
  const decodeToken = await firebase.auth().currentUser?.getIdTokenResult();

  return decodeToken?.claims?.stripeRole ? true : false;
}
