import { createContext, useContext, useReducer, useState } from "react";
import { authReducer } from "../Reducer/authReducer";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence,
  User,
} from "firebase/auth";
import {
  AuthReducerActionType,
  ReactChildrenType,
  AuthContextType,
  AuthStateType,
  authActionType,
} from "../Types";
import { auth } from "../firebase.config";
import { createUser } from "../Utils/Auth/CreateUserFunc";

export const AuthContext = createContext({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: ReactChildrenType) => {
  const initialAuthState = {
    email: "",
    token: "",
    name: "",
    isAuth: false,
    profile: {
      name: "",
      email: "",
      displayPicture: "",
    },
  };

  const [authState, authDispatch] = useReducer<
    (state: AuthStateType, action: authActionType) => AuthStateType
  >(authReducer, initialAuthState);

  const [currUser, setCurrUser] = useState<User>();

  const SignInUser = (fName: string, email: string, password: string) => {
    setPersistence(auth, browserLocalPersistence).then(async () => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        setCurrUser(user);

        updateProfile(user, {
          displayName: fName,
          photoURL:
            "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9uq273syuaptj6gsjpec.jpg",
        });
        //todo: remove console

        await createUser(user);
        authDispatch({
          type: AuthReducerActionType.LOG_IN,
          payload: {
            token: user.uid,
            isAuth: true,
            profile: {
              name: user.displayName,
              email: email,

              displayPicture: user.photoURL,
            },
          },
        });
      } catch (err) {
        console.error(err);
      }
    });
  };
  const LogInUser = (email: string, password: string) => {
    setPersistence(auth, browserLocalPersistence)
      .then(async () => {
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          const user = userCredential.user;
          setCurrUser(user);
         
          authDispatch({
            type: AuthReducerActionType.LOG_IN,
            payload: {
              token: user.uid,
              isAuth: true,
              profile: {
                name: user.displayName,
                email: email,

                displayPicture: user.photoURL,
              },
            },
          });
        } catch (error) {
          return console.error(error);
        }
      })
      .catch((error) => console.error(error.code, error.message));
  };
  const LogOutUser = () => {
    signOut(auth)
      .then(() => {
        authDispatch({
          type: AuthReducerActionType.LOG_OUT,
          payload: {
            token: "",
            isAuth: false,
            profile: {
              name: "",
              email: "",

              displayPicture: "",
            },
          },
        });
      })
      .catch((error) => console.error(error.code, error.message));
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
        SignInUser,
        LogInUser,
        LogOutUser,
        user:  currUser ,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
