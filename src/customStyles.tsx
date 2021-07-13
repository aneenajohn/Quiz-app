import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  button: {
    width: "30%",
    margin: theme.spacing(3),
    textDecoration: "none",
    outline: "none"
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
    backgroundColor: "#ffee58"
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
  },
  removeOutline: {
    border: "none",
    outline: "none"
  }
}));
