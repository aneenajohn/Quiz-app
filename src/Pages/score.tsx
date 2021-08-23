import { useData } from "../Context/dataContext";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Header } from "../components/header";

export const Score = () => {
  const { score } = useData();
  const percentage = (score / 25) * 100;
  return (
    <div>
      <Header />
      <h2 className="score--content">Hey, You scored {score}/25</h2>
      <div className="progress">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            // textColor: "red",
            pathColor: "green",
            trailColor: "red"
          })}
        />
      </div>
    </div>
  );
};
