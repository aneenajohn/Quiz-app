import { useEffect } from "react";
import { DB } from "./Types/quiz.types";
import axios from "axios";
import { useData } from "./Context/dataContext";
import { LOAD_QUIZ_DATA } from "./Utils/constants";

export function DataLoader() {
  const { dataDispatch } = useData();
  useEffect(() => {
    (async function getQuizData() {
      const { data } = await axios.get<DB>("https://be-ask.aneenasam.repl.co");
      console.log("data from loader", data);
      data.quizDB.map((quiz) =>
        dataDispatch({ type: LOAD_QUIZ_DATA, payLoad: quiz })
      );
    })();
  }, []);
  return null;
}
