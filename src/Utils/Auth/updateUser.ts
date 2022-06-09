import { User } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

export const updateUserDb = async (user: User, data = {}) => {
  let currentUserRef = doc(db, `User/${user.uid}`);

  try {
    await updateDoc(currentUserRef, data);
  } catch (err) {
    console.error(err);
  }
};
