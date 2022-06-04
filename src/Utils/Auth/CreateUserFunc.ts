import { User } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
export const createUser = async (user: User) => {
  let currentUserRef = doc(db, `User/${user.uid}`);

  try {
    const snapShot = await getDoc(currentUserRef);
    if (!snapShot.exists()) {
      await setDoc(currentUserRef, {
        email: user.email,
        name: user.displayName,
        displayPicture: user.photoURL,
        score:0
      });
    }
  } catch (err) {
    console.error(err);
  }
};
