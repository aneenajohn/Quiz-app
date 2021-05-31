import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { DB } from "../Types/quiz.types";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import { FormControl, FormControlLabel } from "@material-ui/core";
import { useStyles } from "../customStyles";
import { Question } from "../Types/quiz.types";

async function getQuizData(): Promise<DB> {
  const { data } = await axios.get<DB>("https://be-ask.aneenasam.repl.co");
  console.log("quizDB :", data.quizDB[0].quizName);
  return data;
}

// getQuizData();

export const Quiz = () => {
  const [quizData, setQuizData] = useState<DB | null>();
  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const classes = useStyles();

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

  function nextBtnHandler(
    index: number,
    setIndex: any,
    totalQuestions: number
  ) {
    if (index !== totalQuestions - 1) {
      return setIndex(index + 1);
    }
  }

  function calculateScore(e, answer: string) {
    console.log(e.target.value, answer);
    if (e.target.value === answer) {
      setScore(score + 5);
    }
  }
  console.log("score", score);

  return (
    <Container>
      <Card>
        <CardContent>
          {quizData &&
            quizData.quizDB.map((data) => {
              return (
                <>
                  <Typography variant="h4" component="h1" color="primary">
                    {data.quizName}
                  </Typography>
                  <Container>
                    <Typography variant="h6" component="h2" color="textPrimary">
                      {data.questions[index].question}
                    </Typography>
                    <FormControl>
                      <RadioGroup
                        onChange={(e) =>
                          calculateScore(e, data.questions[index].answer)
                        }
                      >
                        {data.questions[index].options.map((option) => {
                          return (
                            <FormControlLabel
                              control={<Radio color="primary" />}
                              label={option.text}
                              value={option.text}
                            ></FormControlLabel>
                          );
                        })}
                      </RadioGroup>
                      <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={() =>
                          nextBtnHandler(index, setIndex, data.questions.length)
                        }
                      >
                        Next
                      </Button>
                    </FormControl>
                  </Container>
                </>
              );
            })}
        </CardContent>
      </Card>
    </Container>
  );
};
