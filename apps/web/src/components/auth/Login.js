import { SignOutButton } from "../auth/SignOutButton";
import { UsernameForm } from "./UsernameForm";
import { useContext } from "react";
import { UserContext } from "../../utils/context";
import { SignInWithGoogle } from "../auth/SignInWithGoogle";
import Stripe from "../Stripe";
import React from "react";


function Logic(username){
  return !username ? (
    <UsernameForm />
  ) : (
    <>
      <Stripe />
      <SignOutButton />
    </>
  )
  
}
function Login() {
  const { user, username } = useContext(UserContext);
  return (
    <>
      {user ? 
        Logic(username)
       : (
        <SignInWithGoogle />
      )}
    </>
  );
}
export default Login;
