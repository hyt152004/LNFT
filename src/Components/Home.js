import { useEffect, useState } from "react";
import Question from "./Question";
import CurrentTime from "./CurrentTime";
import Scale from "./Scale";
import DayButtonList from "./DayButtonList";

function Home() {
  const [questionOneResponse, setQuestionOneResponse] = useState("");
  const [questionTwoResponse, setQuestionTwoResponse] = useState("");
  const [questionThreeResponse, setQuestionThreeResponse] = useState("");
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

    setListOfDayRecords((listOfDayRecords) => [...listOfDayRecords, form]);
    setQuestionOneResponse("");
    setQuestionTwoResponse("");
    setQuestionThreeResponse("");
    setEmotionScaleSelected(-1);
    setDayScoreSelected(-1);
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
          question="What was the best things that happened today?"
          name="firstQuestion"
          value={questionOneResponse}
          setFunction={setQuestionOneResponse}
        />

        <Question
          question="How could today have been better?"
          name="secondQuestion"
          value={questionTwoResponse}
          setFunction={setQuestionTwoResponse}
        />

        <Question
          question="What do I love about myself?"
          name="thirdQuestion"
          value={questionThreeResponse}
          setFunction={setQuestionThreeResponse}
        />
      </div>

      <Scale
        purpose="Emotion Scale"
        id="selectEmotionScale"
        setFunction={setEmotionScaleSelected}
      />
      <Scale
        purpose="Day Score"
        id="selectDayScore"
        setFunction={setDayScoreSelected}
      />

      <div className="submit">
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <DayButtonList
        listOfDayRecords={listOfDayRecords}
        currentDayDisplay={currentDayDisplay}
        handleDayButton={handleDayButton}
      />
    </div>
  );
}

export default Home;
