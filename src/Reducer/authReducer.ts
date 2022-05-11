import { AuthStateType, authActionType } from "../Types";

export const authReducer = (state: AuthStateType, action: authActionType) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,

        token: action.payload.token,

        isAuth: action.payload.isAuth,

        profile: {
          name: action.payload.profile.name,
          email: action.payload.profile.email,
          displayPicture: action.payload.profile.displayPicture,
        },
      };

    case "SIGN_OUT":
      return {
        ...state,
        token: "",
        isAuth: false,
        profile: {
          name: "",
          email: "",
          displayPicture: "",
        },
      };

    default:
      console.error(" default of auth reducer is reached");
      return state;
  }
};
