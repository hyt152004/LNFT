import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import DayPage from "./Components/DayPage";
import { useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

function App() {
  // naming tab header name
  document.title = "Let's Not Forget Today";

  // stores an array of information for ONE day to be displayed on "DayPage"
  const [currentDayDisplay, setCurrentDayDisplay] = useState([]);
  // stores an array of information for all the days (2D array)
  const [listOfDayRecords, setListOfDayRecords] = useState([]);

  // stores index to be used to display specific day info and its corresponding questions
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  // manually generated questions to ask user
  const listOfQuestions = [
    "What was the best thing that happened today?",
    "How could today have been better?",
    "What do I love about myself?",
    "What challenges did I face and how did I overcome them?",
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

  // returns an array of three random questions
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

  // stores an array of questions seen so far (2D array)
  // here since a function cannot be called before its initialization
  const [listOfThreeQuestions, setListOfThreeQuestions] = useState([]);

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
              currentDayIndex={currentDayIndex}
              listOfThreeQuestions={listOfThreeQuestions}
              setCurrentDayIndex={setCurrentDayIndex}
              setListOfThreeQuestions={setListOfThreeQuestions}
              threeRandomQuestions={threeRandomQuestions()}
            />
          }
        />
        <Route
          path="/about"
          element={
            <DayPage
              currentDayDisplay={JSON.parse(
                localStorage.getItem("currentDayDisplay")
              )}
              currentDayIndex={currentDayIndex}
              setCurrentDayIndex={setCurrentDayIndex}
              listOfThreeQuestions={listOfThreeQuestions}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
