import { useEffect } from "react";
import { DB, Quizzes } from "./Types/quiz.types";
import axios from "axios";
import { useData } from "./Context/dataContext";
import { LOAD_QUIZ_DATA } from "./Utils/constants";
import { REACT_APP_BACKEND_URL } from "./Backend_API";

export function DataLoader() {
  const { dataDispatch } = useData();
  useEffect(() => {
    (async function getQuizData() {
      const { data } = await axios.get<DB>(REACT_APP_BACKEND_URL);
      console.log("data from loader", data);
      data.Quizzes.map((quiz: Quizzes) =>
        dataDispatch({ type: LOAD_QUIZ_DATA, payLoad: quiz })
      );
    })();
  }, [dataDispatch]);
  return null;
}
