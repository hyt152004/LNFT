import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [questionOneResponse, setQuestionOneResponse] =
    useState("Respond here!");
  const [questionTwoResponse, setQuestionTwoResponse] =
    useState("Respond here!");
  const [questionThreeResponse, setQuestionThreeResponse] =
    useState("Respond here!");
  const [emotionScaleSelected, setEmotionScaleSelected] = useState(-1);
  const [dayScoreSelected, setDayScoreSelected] = useState(-1);
  const [listOfDayRecords, setListOfDayRecords] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentDayDisplay, setCurrentDayDisplay] = useState([]);

  const handleSubmit = () => {
    const form = {
      questionOneResponse,
      questionTwoResponse,
      questionThreeResponse,
      emotionScaleSelected,
      dayScoreSelected,
    };
    // console.log(listOfDayRecords[0]?.questionOneResponse);
    setListOfDayRecords((listOfDayRecords) => [...listOfDayRecords, form]);
    setQuestionOneResponse("See you tomorrow~");
    setQuestionTwoResponse("");
    setQuestionThreeResponse("");
    setEmotionScaleSelected(-1);
    setDayScoreSelected(-1);
  };

  const handleTextAreaChange = (value, operation) => {
    operation(value);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentDate.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  });

  const handleDayButton = (idx) => {
    setCurrentDayDisplay([
      listOfDayRecords[idx]?.questionOneResponse,
      listOfDayRecords[idx]?.questionTwoResponse,
      listOfDayRecords[idx]?.questionThreeResponse,
      listOfDayRecords[idx]?.emotionScaleSelected,
      listOfDayRecords[idx]?.dayScoreSelected,
    ]);
  };

  return (
    <div className="App">
      <div>
        <p>Current Date and Time:</p>
        <p>{formattedDate}</p>
      </div>
      <div className="questions">
        <label>
          <p>What was the best things that happened today?</p>
          <textarea
            name="firstQuestion"
            value={questionOneResponse}
            onChange={(e) => {
              handleTextAreaChange(e.target.value, setQuestionOneResponse);
            }}
          ></textarea>
        </label>

        <label>
          <p>How could today have been better?</p>
          <textarea
            name="secondQuestion"
            value={questionTwoResponse}
            onChange={(e) => {
              handleTextAreaChange(e.target.value, setQuestionTwoResponse);
            }}
          ></textarea>
        </label>

        <label>
          <p>What do I love about myself?</p>
          <textarea
            name="thirdQuestion"
            value={questionThreeResponse}
            onChange={(e) => {
              handleTextAreaChange(e.target.value, setQuestionThreeResponse);
            }}
          ></textarea>
        </label>
      </div>

      <div>
        <label htmlFor="selectEmotionScale">
          Choose an emotionScale between 1 and 10:
        </label>
        <input
          type="number"
          id="selectEmotionScale"
          name="numberInput"
          min={1}
          max={10}
          onChange={(e) =>
            handleTextAreaChange(e.target.value, setEmotionScaleSelected)
          }
        />
      </div>

      <div>
        <label htmlFor="selectDayScore">
          Choose a dayScore between 1 and 10:
        </label>
        <input
          type="number"
          id="selectDayScore"
          name="numberInput"
          min={1}
          max={10}
          onChange={(e) =>
            handleTextAreaChange(e.target.value, setDayScoreSelected)
          }
        />
      </div>

      <div className="submit">
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="listOfDayRecords">
        {listOfDayRecords.map((day, idx) => (
          <button
            onClick={() => {
              handleDayButton(idx);
            }}
            key={idx}
          >
            Day {idx + 1}
          </button>
        ))}
      </div>
      <div className="displayDay">
        {currentDayDisplay.map((info, idx) => (
          <p key={idx}>{info}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
