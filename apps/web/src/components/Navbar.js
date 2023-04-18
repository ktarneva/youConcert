import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "../utils/context";
import { auth } from "../utils/firebase";

// Top navbar
export default function Navbar() {
  const { user, username } = useContext(UserContext);

  const router = useRouter();
  const signOut = () => {
    auth.signOut();
    router.reload();
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">youConcert</button>
          </Link>
        </li>

        {/* user is signed-in and has username */}
        {username && (
          <>
            <li>
              <Link href="/">
                <button onClick={signOut}>Sign Out</button>
              </Link>
            </li>

            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL} />
              </Link>
            </li>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
          <li>
            <Link href="/Login">
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
