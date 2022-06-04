import { createContext, useContext, useReducer } from "react";
import {
  questionStateType,
  ReactChildrenType,
} from "../Types";
import { quizReducer } from "../Reducer/quizReducer";
import { questionContextType } from "../Types/questionType";

const questionContext = createContext({} as questionContextType);

export const useQuestions = () => useContext(questionContext);

export const QuestionProvider = ({ children }: ReactChildrenType) => {
  const intialState: questionStateType = {
    questions: [],
    score: 0,
    userSelection: {},
  };

  const [questionState, questionDispatch] = useReducer(
    quizReducer,
    intialState
  );

  return (
    <questionContext.Provider value={{ questionState, questionDispatch }}>
      {children}
    </questionContext.Provider>
  );
};
