import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Quiz } from "./Pages/QuizNew";
import { DataLoader } from "./dataLoader";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./customStyles";

export default function App() {
  const classes = useStyles();
  return (
    <div className="App">
      {/* <Typography
        className={classes.appHeader}
        variant="h4"
        component="h1"
        color="primary"
      >
        World Of Words
      </Typography> */}
      <DataLoader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}
