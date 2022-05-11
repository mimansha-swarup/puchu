import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../Reducer/authReducer";

import {
  AuthReducerActionType,
  ReactChildrenType,
  AuthContextType,
  AuthStateType,
  authActionType,
} from "../Types";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  
} from "firebase/auth";
import { auth } from "../firebase.config";
import { createUser } from '../Utils/Auth/CreateUserFunc';

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

 

  const SignInUser =  (fName: string, email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user);
        updateProfile(user, {
          displayName: fName,
          photoURL:
            "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9uq273syuaptj6gsjpec.jpg",
        });
        //todo: remove console
        console.log(user);
        await createUser(user)
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
        
      })
      .catch((error) => console.error(error.code, error.message));
  };
  const LogInUser = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
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
      value={{ authState, authDispatch, SignInUser, LogInUser, LogOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
