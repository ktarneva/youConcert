import useBasicStatus from "./stripe/useBasicStatus";
import { createCheckoutSession } from "./stripe/createCheckoutSession";
import firebase from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Stripe() {
  const [user] = useAuthState(firebase.auth());
  const userIsBasic = useBasicStatus(user);
  return (
    <div>
      {!userIsBasic ? (
        <button onClick={() => createCheckoutSession(user.uid)}>
          Upgrade to basic!
        </button>
      ) : (
        <h2>You are awesome!</h2>
      )}
    </div>
  );
}
