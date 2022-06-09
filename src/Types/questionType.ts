// import { DocumentData } from "firebase/firestore"

export type questionStateType = {
  questions: []
  score: number
  userSelection:{
    [key:number]:String
  }
}

export type questionContextType = {
  questionState: questionStateType;
  questionDispatch: React.Dispatch<questionActionType>;
  
};
export type questionActionType = {
  type: string;
  payload: any
};
