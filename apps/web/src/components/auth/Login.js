import { SignOutButton } from "./SignOutButton";
import { UsernameForm } from "./UsernameForm";
import { useContext } from "react";
import { UserContext } from "../../utils/context";
import { SignInWithGoogle } from "../auth/SignInWithGoogle";
import Stripe from "../Stripe";
import React from "react";

function Login() {
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
        <SignInWithGoogle />
      )}
    </>
  );
}
export default Login;
