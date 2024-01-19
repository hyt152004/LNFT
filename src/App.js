import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import DayPage from "./Components/DayPage";
import { useState } from "react";

function App() {
  // naming tab header name
  document.title = "Let's Not Forget Today";

  // stores an array of information for all the days (2D array)
  const [listOfDayRecords, setListOfDayRecords] = useState([]);

  // stores index to be used to display specific day info and its corresponding questions
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  // manually generated questions to ask user
  const listOfQuestions = [
    "What was the highlight of today?",
    "How can I turn challenges from today into opportunities for growth?",
    "What qualities about myself am I proud of?",
    "What obstacles did I encounter, and how did I overcome them?",
    "What steps did I take towards achieving my goals?",
    "What am I thankful for in my life right now?",
    "In what ways did I prioritize self-care today?",
    "How did I effectively manage stress or difficult situations?",
    "What new knowledge or skills did I acquire today?",
    "How did I positively impact others around me?",
    "Is there anything I need to forgive myself for or let go of?",
    "What positive actions can I take tomorrow to enhance my day?",
    "How did I effectively manage my time and tasks today?",
    "Did I maintain a positive attitude in various situations?",
    "What specific change can I make tomorrow to improve myself?",
    "What brought me joy or laughter today?",
    "Who deserves my thanks for their support or assistance?",
    "How did I demonstrate adaptability and resilience?",
    "What opportunities for learning and development did I embrace?",
    "In what ways did I foster meaningful connections with others?",
    "Did I engage in any acts of kindness or generosity?",
    "How did I balance productivity with moments of relaxation?",
    "What positive habits did I reinforce today?",
    "How did I contribute to a positive and inclusive environment?",
    "What new ideas or perspectives did I encounter today?",
    "What steps did I take to step out of my comfort zone?",
    "What accomplishments am I proud of today?",
    "How did I practice mindfulness and presence?",
    "What choices did I make to nourish my physical well-being?",
    "What affirmations or positive self-talk did I engage in?",
    "In what ways did I contribute to environmental sustainability?",
    "What steps did I take towards achieving my long-term goals?",
    "How did I express my creativity today?",
    "What moments provided a sense of fulfillment or purpose?",
    "Did I actively listen and show empathy towards others?",
    "How did I build and strengthen my support network?",
    "What choices did I make today that align with my values?",
    "What steps did I take towards personal and professional growth?",
    "What aspects of today will I carry forward with gratitude?",
  ];

  // Feel free to use, modify, or add more questions as needed.

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
