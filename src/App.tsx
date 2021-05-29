import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";

export default function App() {
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
