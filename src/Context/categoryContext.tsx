import { createContext, useContext, useEffect, useReducer } from "react";
import { ReactChildrenType } from "../Types/common";
import { getDocs, collection, DocumentData } from 'firebase/firestore';
import { db } from "../firebase.config";
import { categoryContextType } from "../Types";
import { categoryReducer } from "../Reducer/categoryReducer";

const categoryContext = createContext({} as categoryContextType);

export const useCategory = () => useContext(categoryContext);

export const CategoryProvider = ({ children }: ReactChildrenType) => {
  const intialState = {
    categories: {},
    quizzes: {},
  };

  const [categoryState, categoryDispatch] = useReducer(
    categoryReducer,
    intialState
  );

  useEffect(() => {
    
    (async () => {
      const categoryDocs = await getDocs(collection(db, "Categories"));
      categoryDocs.forEach((doc) =>
        categoryDispatch({
          type: "SET_CATEGORY",
          payload: {
            id: doc.id,
            data: { ...doc.data(), quizzes: doc.data().quizzes.map((quiz: { id: string; }) => quiz.id) },
          },
        })
      );
    })();
  }, []);

  return (
    <categoryContext.Provider value={{ categoryState, categoryDispatch }}>
      {children}
    </categoryContext.Provider>
  );
};
