import { DocumentData } from "firebase/firestore"

export type categoryStateType = {
  categories: {
    [key:string]: DocumentData
  },
  quizzes: {
    [key:string]: DocumentData
  },
}

export type categoryContextType = {
  categoryState: categoryStateType;
  categoryDispatch: React.Dispatch<categoryActionType>;
  
};
export type categoryActionType = {
  type: string;
  payload: {
    id: string;
    data: any
    
  };
};
