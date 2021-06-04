import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Quiz } from "./Pages/Quiz";
import { DataLoader } from "./dataLoader";

export default function App() {
  return (
    <div className="App">
      <h1>World Of Words</h1>
      <DataLoader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}
