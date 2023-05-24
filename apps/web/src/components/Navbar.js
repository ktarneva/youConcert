import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "../utils/context";
import { auth } from "../utils/firebase";
import Logo from "../../public/youConcert_logo.png";
import Image from "next/image";
import React from "react";
import { SignInWithGoogle } from "../components/auth/SignInWithGoogle";

// Top navbar
export default function Navbar() {
  const { user, username } = useContext(UserContext);

  const router = useRouter();
  const signOut = () => {
    auth.signOut();
    router.reload();
  };

  return (
    /* left side*/
    <ul className="fixed h-14 w-full flex flex-bowrap items-center p-4 bg-[#0e0e10] mb-[2px] z-10">
      <Link href="/" className="flex">
        <Image
          src={Logo}
          alt="/"
          width="200"
          height="200"
          className="curspr-pointer z-10"
        />
      </Link>
      {/* user is signed-in and has username */}
      {username && (
        /* right side*/
        <>
          <li className="hidden md:flex grow items-center justify-end">
            <li className="flex items-center">
              <Link href="/">
                <button
                  className="px-4 py-[6px] rounded-lg font-bold bg-[#9147ff] mr-2"
                  onClick={signOut}
                >
                  Sign Out
                </button>
              </Link>
            </li>

            <li>
              <Link href={`/${username}`}>
                <img width="50" height="50" src={user?.photoURL} />
              </Link>
            </li>
          </li>
        </>
      )}

      {/* user is not signed OR has not created username */}
      {!username && (
        <li className="hidden md:flex grow items-center justify-end">
            <SignInWithGoogle />      
        </li>
      )}
    </ul>
  );
}
