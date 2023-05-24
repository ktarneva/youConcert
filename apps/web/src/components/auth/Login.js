import { SignOutButton } from "./SignOutButton";
import { UsernameForm } from "./UsernameForm";
import { useContext } from "react";
import { UserContext } from "../../utils/context";
import Stripe from "../Stripe";

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
        <></>
      )}
    </>
  );
}
