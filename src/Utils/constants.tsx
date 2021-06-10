import { DB } from "../Types/quiz.types";

export const quizData: DB[] = [];
export const quizChosen: string = "";
export const score: number = 0;
export const selectedOption: string = "";

export const LOAD_QUIZ_DATA: string = "LOAD_QUIZ_DATA";
export const CALCULATE_SCORE = "CALCULATE_SCORE";
export const SET_SELECTED_OPTION = "SET_SELECTED_OPTION";
