import axios from "axios";
import { REACT_APP_BACKEND_URL } from "../Backend_API";
import { Quizzes, Question, Option } from "../Types/quiz.types";

export async function updateSelectedOptionStatus(
  quizId: Quizzes,
  questionId: Question,
  optionId: Option
) {
  try {
    const { data } = await axios.post(
      `${REACT_APP_BACKEND_URL}/${quizId}/questions/${questionId}/${optionId}`,
      {
        isSelected: true
      }
    );
    console.log(
      `${REACT_APP_BACKEND_URL}/${quizId}/questions/${questionId}/${optionId}`
    );
    console.log("posted data", data);
  } catch (err) {
    console.error(err);
  }
}
