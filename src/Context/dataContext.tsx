import { createContext, useReducer, useContext } from "react";
import { DB } from "../Types/quiz.types";
import { dataReducer } from "../Reducer/dataReducer";
import { quizData, quizChosen } from "../Utils/constants";

export const DataContext = createContext<any>({});

export const DataProvider = ({ children }: any) => {
  const [state, dataDispatch] = useReducer(dataReducer, {
    quizData,
    quizChosen
  });
  return (
    <DataContext.Provider
      value={
        (dataReducer,
        {
          quizData: state.quizData,
          quizChosen: state.quizChosen,
          dataDispatch
        })
      }
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
