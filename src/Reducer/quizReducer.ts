import { questionStateType, questionActionType } from "../Types";

export const quizReducer = (
  state: questionStateType,
  action: questionActionType
) => {
  switch (action.type) {
    case "SET_QUESTIONS":
      return {
        ...state,
        questions: action.payload,
      };

    case "UPDATE_SCORE":
      return {
        ...state,
        score: state.score+action.payload,
      };
    case "UPDATE_USERCHOICE":
      return {
        ...state,
        userSelection: action.payload,
      };
    case "RESET":
      return {
        ...state,
        userSelection: {},
        score: 0,
      };

    default:
      console.error(" default of category reducer is reached");
      return state;
  }
};
