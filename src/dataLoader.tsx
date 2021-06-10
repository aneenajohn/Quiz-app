import { useEffect } from "react";
import { DB, quizzes } from "./Types/quiz.types";
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
      data.quizzes.map((quiz: quizzes) =>
        dataDispatch({ type: LOAD_QUIZ_DATA, payLoad: quiz })
      );
    })();
  }, []);
  return null;
}
