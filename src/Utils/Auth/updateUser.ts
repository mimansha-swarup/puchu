import { User } from "firebase/auth";
import { doc, getDoc,  updateDoc } from "firebase/firestore";
import { db } from "../../firebase.config";


export const updateUserDb = async (user: User,data ={}) => {
  let currentUserRef = doc(db, `User/${user.uid}`);

  try {
    const snapShot = await getDoc(currentUserRef);
    if (!snapShot.exists()) {
      await updateDoc(currentUserRef, data);
    }
  } catch (err) {
    console.error(err);
  }
};
