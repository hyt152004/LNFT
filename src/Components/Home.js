import { useEffect, useState } from "react";
import Question from "./Question";
import CurrentTime from "./CurrentTime";
import Scale from "./Scale";
import DayButtonList from "./DayButtonList";

function Home({
  threeQ,
  setCurrentDayDisplay,
  listOfDayRecords,
  setListOfDayRecords,
}) {
  const [questionOneResponse, setQuestionOneResponse] = useState("");
  const [questionTwoResponse, setQuestionTwoResponse] = useState("");
  const [questionThreeResponse, setQuestionThreeResponse] = useState("");
  const [emotionScaleSelected, setEmotionScaleSelected] = useState(5);
  const [dayScoreSelected, setDayScoreSelected] = useState(5);
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleSubmit = () => {
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
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

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
      <hr />
      <div>
        <CurrentTime currentDate={currentDate} />
      </div>
      <div className="questions">
        <Question
          question={threeQ[0]}
          name="firstQuestion"
          value={questionOneResponse}
          setFunction={setQuestionOneResponse}
        />

        <Question
          question={threeQ[1]}
          name="secondQuestion"
          value={questionTwoResponse}
          setFunction={setQuestionTwoResponse}
        />

        <Question
          question={threeQ[2]}
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

      <div className="submit">
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <DayButtonList
        listOfDayRecords={listOfDayRecords}
        handleDayButton={handleDayButton}
      />
    </div>
  );
}

export default Home;
