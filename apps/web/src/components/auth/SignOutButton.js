import { auth } from "../../utils/firebase";

export function SignOutButton(){
// Sign out button
function SignOutButton() {
    return <button onClick={() => auth.signOut()}>Sign Out</button>;
  }
  
}