import { quizData, LOAD_QUIZ_DATA } from "../Utils/constants";

export const dataReducer = (state: string, action) => {
  console.log("state", state);
  console.log("action", action);
  switch (action.type) {
    case LOAD_QUIZ_DATA:
      return { ...state, quizData: [...state.quizData, action.payLoad] };

    default:
      return state;
  }
};
