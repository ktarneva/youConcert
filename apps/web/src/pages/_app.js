import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { UserContext } from "../utils/context";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { auth, firestore } from "../utils/firebase";

function MyApp({ Component, pageProps }) {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    let unsubscibe;
    if (user) {
      const ref = firestore.collection("user").doc(user.uid);
      unsubscibe = ref.onSnapshot((doc) => {
        setUsername(doc.data()?.username);
      });
    } else {
      setUsername(null);
    }
    return unsubscibe;
  }, [user]);

  return (
    <UserContext.Provider value={{ user, username }}>
      <Navbar />
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
