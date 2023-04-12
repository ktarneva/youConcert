import { useState } from "react";
import { auth } from "../../utils/firebase";

export function SignInWithEmail() {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");

  async function signInWithEmail() {
    try {
      await auth
        .signInWithEmailAndPassword(email, password)
        .then(async (authCreds) => {
          const id_token = await authCreds.user?.getIdToken();
          console.log(id_token);
        });
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
      <form>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
        />
      </form>
      <button onClick={signInWithEmail}>Sign In</button>
    </div>
  );
}
