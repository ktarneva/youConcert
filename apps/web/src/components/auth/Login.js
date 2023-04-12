import Link from "next/link";
import { SignInWithEmail } from "./SignInWithEmail";
import { SignInWithGoogle } from "./SignInWithGoogle";

export default function Login() {
  const user = null;
  const username = null;
  return (
    <>
      <SignInWithEmail />

      <SignInWithGoogle />

      <Link href={"/register"}>
        You dont have an account? Click here to register!
      </Link>
    </>
  );
}
