import { auth } from "../../../../utils/firebase";

export function SignOutButton() {
  async function signOutButton() {
    return <button onClick={() => auth.signOutButton()}>Sign Out</button>;
  }
}
