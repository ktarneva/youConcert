import { SignInWithEmail } from "./SignInWithEmail";
import { SignInWithGoogle } from "./SignInWithGoogle";
import { SignOutButton } from "./SignOutButton";
import { UsernameForm } from "./UsernameForm";
import { useContext } from "react";
import { UserContext } from "../../utils/context";
import Stripe from "../Stripe"
import Link from "next/link";

export default function Login() {
  const { user, username } = useContext(UserContext);
  return (
    <>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <>
            <Stripe />
            <SignOutButton />
          </>
        )
      ) : (
        <>
          <SignInWithEmail />
          <SignInWithGoogle />
          <Link href={"/Register"}>
            You dont have an account? Click here to register!
          </Link>
        </>
      )}
    </>
  );
}
