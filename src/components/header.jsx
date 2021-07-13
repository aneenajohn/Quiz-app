import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo para--lead">LingoQuiz</span>
        </div>
        <div className="topbarRight">
          <Link to="/" className="topbarLinks">
            Home
          </Link>
        </div>
      </div>
    </header>
  );
};
