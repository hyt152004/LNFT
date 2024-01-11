import { useEffect, useState } from "react";
import Question from "./Question";
import CurrentTime from "./CurrentTime";
import Scale from "./Scale";
import DayButtonList from "./DayButtonList";

function Home({
  setCurrentDayDisplay,

  setListOfDayRecords,
  setCurrentDayIndex,
  setListOfThreeQuestions,
  threeRandomQuestions,
}) {
  // user's input
  const [questionOneResponse, setQuestionOneResponse] = useState("");
  const [questionTwoResponse, setQuestionTwoResponse] = useState("");
  const [questionThreeResponse, setQuestionThreeResponse] = useState("");
  const [emotionScaleSelected, setEmotionScaleSelected] = useState(5);
  const [dayScoreSelected, setDayScoreSelected] = useState(5);
  const [currentDate, setCurrentDate] = useState(new Date());

  const listOfThreeQuestions =
    JSON.parse(localStorage.getItem("listOfThreeQuestions")) || [];

  const listOfDayRecords =
    JSON.parse(localStorage.getItem("listOfDayRecords")) || [];

  // when "Submit" is pressed, listOfThreeQuestions and listOfDayRecords is updated.
  // all input options are set back to default.
  // listOfThreeQuestions and listOfDayRecords is updated for localStorage
  const handleSubmit = () => {
    setListOfThreeQuestions(() => {
      const updatedList = [...listOfThreeQuestions, threeRandomQuestions];
      localStorage.setItem("listOfThreeQuestions", JSON.stringify(updatedList));
      return updatedList;
    });

    const form = {
      questionOneResponse,
      questionTwoResponse,
      questionThreeResponse,
      emotionScaleSelected,
      dayScoreSelected,
    };

    setListOfDayRecords(() => {
      const updatedList = [...listOfDayRecords, form];
      localStorage.setItem("listOfDayRecords", JSON.stringify(updatedList));
      return updatedList;
    });
    setQuestionOneResponse("");
    setQuestionTwoResponse("");
    setQuestionThreeResponse("");
    setEmotionScaleSelected(5);
    setDayScoreSelected(5);
  };

  // clears all localStorage when "Clear" is pressed
  const handleClear = () => {
    localStorage.clear();
  };

  // updates clock every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // when a Day button is pressed we set Current Day Display accordingly
  const handleDayButton = (idx) => {
    setCurrentDayIndex(idx);

    setCurrentDayDisplay(() => {
      const updatedList = [
        listOfDayRecords[idx]?.questionOneResponse,
        listOfDayRecords[idx]?.questionTwoResponse,
        listOfDayRecords[idx]?.questionThreeResponse,
        listOfDayRecords[idx]?.emotionScaleSelected,
        listOfDayRecords[idx]?.dayScoreSelected,
      ];
      localStorage.setItem("currentDayDisplay", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  // returns listOfDayRecords stored in localStorage
  const getListOfDayRecords = () => {
    const parsedData = JSON.parse(localStorage.getItem("listOfDayRecords"));
    return parsedData;
  };

  return (
    <div className="App">
      <hr />
      <div>
        <CurrentTime currentDate={currentDate} />
      </div>
      <div className="questions">
        <Question
          question={threeRandomQuestions[0]}
          name="firstQuestion"
          value={questionOneResponse}
          setFunction={setQuestionOneResponse}
        />

        <Question
          question={threeRandomQuestions[1]}
          name="secondQuestion"
          value={questionTwoResponse}
          setFunction={setQuestionTwoResponse}
        />

        <Question
          question={threeRandomQuestions[2]}
          name="thirdQuestion"
          value={questionThreeResponse}
          setFunction={setQuestionThreeResponse}
        />
      </div>

      <Scale
        purpose="Emotion Scale"
        id="selectEmotionScale"
        setFunction={setEmotionScaleSelected}
        value={emotionScaleSelected}
      />
      <Scale
        purpose="Day Score"
        id="selectDayScore"
        setFunction={setDayScoreSelected}
        value={dayScoreSelected}
      />

      <div className="endAction">
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleClear}>Clear</button>
      </div>

      <DayButtonList
        listOfDayRecords={getListOfDayRecords()}
        handleDayButton={handleDayButton}
        currentDate={currentDate}
      />
    </div>
  );
}

export default Home;
