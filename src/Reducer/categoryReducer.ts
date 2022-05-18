
import { categoryStateType ,categoryActionType} from '../Types';

export const categoryReducer = (state:categoryStateType, action:categoryActionType) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        categories: {...state.categories,[action.payload.id]: action.payload.data}
    
      };

    case "SET_QUIZ":
      return {
        ...state,
      quizzes:{
        ...state.quizzes,
        [action.payload.id]: action.payload.data
      }
      };

    default:
      console.error(" default of category reducer is reached");
      return state;
  }
};
