import { createContext, useReducer, useContext } from "react";
import { dataReducer } from "../Reducer/dataReducer";
import {
  score,
  quizData,
  quizChosen,
  selectedOption
} from "../Utils/constants";

export const DataContext = createContext<any>({});

export const DataProvider = ({ children }: any) => {
  const [state, dataDispatch] = useReducer(dataReducer, {
    quizData,
    quizChosen,
    score,
    selectedOption
  });

  return (
    <div>
      <DataContext.Provider
        value={
          // (dataReducer,
          {
            quizData: state.quizData,
            quizChosen: state.quizChosen,
            score: state.score,
            selectedOption: state.selectedOption,
            dataDispatch
          }
          // )
        }
      >
        {children}
      </DataContext.Provider>
    </div>
  );
};

export const useData = () => useContext(DataContext);
