import { useEffect, useState } from "react";
import firebase from "../../utils/firebase";
import isUserBasic from "./isUserBasic";

export default function useBasicStatus(user: firebase.User) {
  const [basicStatus, setBasicStatus] = useState < Boolean > (false);

  useEffect(() => {
    if (user) {
      const checkBasicStatus = async function () {
        setBasicStatus(await isUserBasic());
      };
      checkBasicStatus();
    }
  }, [user]);
  return basicStatus;
}
