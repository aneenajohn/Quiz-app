import {
  LOAD_QUIZ_DATA,
  CALCULATE_SCORE,
  SET_SELECTED_OPTION
} from "../Utils/constants";

export const dataReducer = (state: string, action: any) => {
  console.log("state", state);
  console.log("action", action);
  switch (action.type) {
    case LOAD_QUIZ_DATA:
      return { ...state, quizData: [...state.quizData, action.payLoad] };

    case CALCULATE_SCORE:
      return { ...state, score: state.score + action.payLoad };

    case SET_SELECTED_OPTION:
      return { ...state, selectedOption: action.payLoad };

    default:
      return state;
  }
};
