import { useEffect, useState } from "react";
import firebase from "../../utils/firebase";
import isUserBasic from "./isUserBasic";

export default function useBasicStatus(user: firebase.User) {
  const [basicStatus, setBasicStatus] = useState < Boolean > (false);

  useEffect(() => {
    if (user) {
      const checkBasicStatus = async function () {     
        try {
          setBasicStatus(await isUserBasic());
        } catch (error) {
          // Handle the error here if needed
          console.error(error);
        }
      };
      checkBasicStatus();
    }
  }, [user]);
  return basicStatus;
}
