import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import DayPage from "./Components/DayPage";
import { useState } from "react";

function App() {
  document.title = "Let's Not Forget Today";
  const [currentDayDisplay, setCurrentDayDisplay] = useState([]);
  const [listOfDayRecords, setListOfDayRecords] = useState([]);

  const listOfQuestions = [
    "What was the best thing that happened today?",
    "How could today have been better?",
    "What do I love about myself?",
    "What challenges did I face, and how did I overcome them?",
    "Did I make progress toward my goals today?",
    "What am I grateful for?",
    "Did I practice self-care today?",
    "How did I handle stress or difficult situations?",
    "Did I learn something new today?",
    "How did I contribute positively to others?",
    "Is there anything I need to forgive myself for?",
    "What can I do tomorrow to make it a great day?",
    "How did I manage my time today?",
    "Did I maintain a positive attitude?",
    "What is one thing I can do differently tomorrow to improve?",
  ];

  const threeRandomQuestions = () => {
    let listOfInt = [];

    while (listOfInt.length !== 3) {
      var randInt = Math.floor(Math.random() * listOfQuestions.length);
      if (listOfInt.indexOf(randInt) === -1) {
        listOfInt.push(randInt);
      }
    }

    let threeQuestions = [
      listOfQuestions[listOfInt[0]],
      listOfQuestions[listOfInt[1]],
      listOfQuestions[listOfInt[2]],
      "EmotionScale",
      "DayScore",
    ];

    return threeQuestions;
  };

  const threeQ = threeRandomQuestions();

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
              threeQ={threeQ}
            />
          }
        />
        <Route
          path="/about"
          element={
            <DayPage currentDayDisplay={currentDayDisplay} threeQ={threeQ} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
