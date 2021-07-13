import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "../customStyles";
import { Question } from "../Types/quiz.types";
import { useData } from "../Context/dataContext";
import { useLocation } from "react-router-dom";
import { Option } from "../Types/quiz.types";
import { useState } from "react";
import { updateSelectedOptionStatus } from "../ServerCalls/serverCalls";
import { calculateScore, setSelectedOption } from "../Utils/functions";
import { Header } from "../components/header.jsx";
import { useNavigate } from "react-router-dom";

export const Quiz = () => {
  const { quizData, score, dataDispatch, selectedOption } = useData();
  const [index, setIndex] = useState<number>(0);
  const [optionId, setOptionId] = useState<Option>(0);
  // const [score, setScore] = useState<number>(0);
  const classes = useStyles();
  const [isChosen, setChosen] = useState<boolean>(false);

  const toggleActive = () => setChosen(!isChosen);
  const navigate = useNavigate();

  function nextBtnHandler(
    index: number,
    setIndex: any,
    totalQuestions: number
  ) {
    if (index !== totalQuestions - 1) {
      return setIndex(index + 1);
    }
    navigate("/results");
  }

  console.log("score", score);
  console.log("inside quiz", quizData);
  const { state } = useLocation();
  console.log({ state });
  console.log("chosen quiz", state.quizChosen);

  return (
    <>
      <Header />
      <Container>
        <Card>
          <CardContent>
            {quizData &&
              quizData
                .filter((quiz: QuizDB) => quiz.quizName === state.quizChosen)
                .map((data: QuizDB) => {
                  console.log("quizData", data);
                  return (
                    <>
                      <Typography variant="h4" component="h1" color="primary">
                        {data.quizName}
                      </Typography>
                      <Container>
                        <Typography
                          variant="h6"
                          component="h2"
                          // color="textPrimary"
                          className={classes.quizQuestion}
                        >
                          {data.questions[index].question}
                        </Typography>
                        <Grid
                          container
                          spacing={2}
                          className={classes.optioncontainer}
                        >
                          {data.questions[index].options.map(
                            (option: Option) => (
                              <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Paper
                                  className={
                                    isChosen
                                      ? classes.quizOptionsActive
                                      : classes.quizOptions
                                  }
                                  onClick={() => {
                                    setSelectedOption(
                                      option.text,
                                      dataDispatch
                                    );
                                    setOptionId(option._id);
                                    toggleActive();
                                  }}
                                >
                                  {option.text}
                                </Paper>
                              </Grid>
                            )
                          )}
                        </Grid>
                        {/* {/* <FormControl> */}

                        <Button
                          className={classes.button}
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            console.log(
                              data._id,
                              data.questions[index]._id,
                              data.questions[index].answer,
                              optionId
                            );
                            nextBtnHandler(
                              index,
                              setIndex,
                              data.questions.length
                            );
                            updateSelectedOptionStatus(
                              data._id,
                              data.questions[index]._id,
                              optionId
                            );
                            calculateScore(
                              selectedOption,
                              data.questions[index].answer,
                              data.questions[index].points,
                              dataDispatch
                            );
                          }}
                        >
                          Next
                        </Button>
                        <Typography>
                          Current Question: {data.questions[index] + 1}/
                          {data.questions.length}
                        </Typography>
                      </Container>
                    </>
                  );
                })}
          </CardContent>
        </Card>
      </Container>
    </>
  );
};
