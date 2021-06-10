import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  button: {
    width: "50%",
    margin: theme.spacing(3)
  },
  quizOptions: {
    cursor: "pointer",
    // margin:theme.spacing(1),
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  quizOptionsActive: {
    cursor: "pointer",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#3B82F6"
  },
  quizQuestion: {
    color: theme.palette.text.primary
  },
  appHeader: {
    margin: theme.spacing(2),
    fontWeight: "bold"
  },
  quizBtn: {
    textDecoration: "none"
  },
  optioncontainer: {
    margin: theme.spacing(2)
  }
}));
