import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import DayPage from "./Components/DayPage";
import { useState } from "react";

function App() {
  document.title = "Let's Not Forget Today";
  const [currentDayDisplay, setCurrentDayDisplay] = useState([]);
  const [listOfDayRecords, setListOfDayRecords] = useState([]);

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setCurrentDayDisplay={setCurrentDayDisplay}
              listOfDayRecords={listOfDayRecords}
              setListOfDayRecords={setListOfDayRecords}
            />
          }
        />
        <Route
          path="/about"
          element={<DayPage currentDayDisplay={currentDayDisplay} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
