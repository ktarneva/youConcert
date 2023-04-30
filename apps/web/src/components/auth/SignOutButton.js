import { auth } from "../../utils/firebase";

export function SignOutButton() {
  // Sign out button
  async function signOutButton() {
    return <button onClick={() => auth.signOutButton()}>Sign Out</button>;
  }
}
