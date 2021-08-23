import { CALCULATE_SCORE, SET_SELECTED_OPTION } from "../Utils/constants";
// import { useData } from "../Context/dataContext";

export function calculateScore(
  selectedOption: string,
  answer: string,
  points: number,
  dataDispatch: any
) {
  if (selectedOption === answer) {
    dataDispatch({ type: CALCULATE_SCORE, payLoad: points });
  }
}

export function setSelectedOption(selectedOption: string, dataDispatch: any) {
  dataDispatch({
    type: SET_SELECTED_OPTION,
    payLoad: selectedOption
  });
  return null;
}
