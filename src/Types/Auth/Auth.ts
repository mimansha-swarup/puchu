import React from "react";

export type AuthStateType = {
  token: string;
  isAuth: boolean;
  profile:{
    name:string|null;
    email: string;
    displayPicture: any
  }
};

export type AuthContextType = {
  authState: AuthStateType;
  authDispatch: React.Dispatch<authActionType>;
  SignInUser: (fName: string, email: string, password: string) => void;
  LogInUser: (email: string, password: string) => void;
  LogOutUser: () => void;
};
export type authActionType = {
  type: string;
  payload: {
    token: string;
    isAuth: boolean;
    profile:{
      name:string|null;
      email: string;
      displayPicture: any
    }
  };
};

export type LoginCredentialType = {
  email: { value: string };
  password: { value: string };
};
export type SigninCredentialType = {
  fName: { value: string };
  lName: { value: string };
  email: { value: string };
  password: { value: string };
  confirmPassword: { value: string };
};
