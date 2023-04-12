import { auth, googleAuthProvider } from "../../utils/firebase.js";

export function SignInWithGoogle() {
  async function singInWithGoogle() {
    await auth
      .signInWithPopup(googleAuthProvider)
      .then(async (authCreds) => {
        const id_token = await authCreds.user?.getIdToken();
        console.log(id_token);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <button className="btn-google" onClick={singInWithGoogle}>
      <img src={"./google.png"} width="30px" />
      Sign in with Google
    </button>
  );
}
