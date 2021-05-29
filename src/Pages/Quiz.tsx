import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { DB } from "../Types/quiz.types";

async function getQuizData(): Promise<DB> {
  const { data } = await axios.get<DB>("https://be-ask.aneenasam.repl.co");
  console.log("quizDB :", data.quizDB[0].quizName);
  return data;
}

// getQuizData();

export const Quiz = () => {
  const [quizData, setQuizData] = useState<DB | null>();
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    (async function () {
      const quizData = await getQuizData();
      console.log(quizData);
      if ("quizName" in quizData) {
        return setQuizData(quizData);
      }
      return setQuizData(quizData);
    })();
  }, []);

  function nextBtnHandler(index: number, setIndex) {
    if (typeof index === "number") {
      return setIndex(index + 1);
    }
  }

  return (
    <div>
      <h1>Quiz Data</h1>
      <h3>
        {quizData &&
          quizData.quizDB.map((data) => {
            return (
              <>
                <div>{data.quizName}</div>
                <div>{data.playTime}</div>
                <div>
                  <p>{data.questions[index].question}</p>
                  <p className="btnStyle">
                    {data.questions[index].options[0].text}
                  </p>
                  <p className="btnStyle">
                    {data.questions[index].options[1].text}
                  </p>
                </div>
                <button onClick={() => nextBtnHandler(index, setIndex)}>
                  Next
                </button>
              </>
            );
          })}
      </h3>
    </div>
  );
};
