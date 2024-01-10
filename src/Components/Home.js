import { useEffect, useState } from "react";
import Question from "./Question";
import CurrentTime from "./CurrentTime";
import Scale from "./Scale";
import DayButtonList from "./DayButtonList";

function Home({
  setCurrentDayDisplay,
  listOfDayRecords,
  setListOfDayRecords,
  currentDayIndex,
  listOfThreeQuestions,
  setCurrentDayIndex,
  setListOfThreeQuestions,
  threeRandomQuestions,
}) {
  const [questionOneResponse, setQuestionOneResponse] = useState("");
  const [questionTwoResponse, setQuestionTwoResponse] = useState("");
  const [questionThreeResponse, setQuestionThreeResponse] = useState("");
  const [emotionScaleSelected, setEmotionScaleSelected] = useState(5);
  const [dayScoreSelected, setDayScoreSelected] = useState(5);
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleSubmit = () => {
    setCurrentDayIndex(currentDayIndex + 1);
    setListOfThreeQuestions((listOfThreeQuestions) => [
      ...listOfThreeQuestions,
      threeRandomQuestions,
    ]);
    const form = {
      questionOneResponse,
      questionTwoResponse,
      questionThreeResponse,
      emotionScaleSelected,
      dayScoreSelected,
    };

    setListOfDayRecords((listOfDayRecords) => [...listOfDayRecords, form]);
    setQuestionOneResponse("");
    setQuestionTwoResponse("");
    setQuestionThreeResponse("");
    setEmotionScaleSelected(5);
    setDayScoreSelected(5);
    localStorage.setItem("listOfDayRecords", JSON.stringify(listOfDayRecords));
    localStorage.setItem(
      "listOfThreeQuestions",
      JSON.stringify(listOfThreeQuestions)
    );
  };

  const handleClear = () => {
    localStorage.clear();
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDayButton = (idx) => {
    setCurrentDayIndex(idx + 1);
    setCurrentDayDisplay([
      listOfDayRecords[idx]?.questionOneResponse,
      listOfDayRecords[idx]?.questionTwoResponse,
      listOfDayRecords[idx]?.questionThreeResponse,
      listOfDayRecords[idx]?.emotionScaleSelected,
      listOfDayRecords[idx]?.dayScoreSelected,
    ]);
  };

  const getUpdatedListOfDayRecords = () => {
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
        listOfDayRecords={getUpdatedListOfDayRecords()}
        handleDayButton={handleDayButton}
        currentDate={currentDate}
      />
    </div>
  );
}

export default Home;
