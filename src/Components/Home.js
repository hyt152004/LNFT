import { useEffect, useState } from "react";
import Question from "./Question";
import CurrentTime from "./CurrentTime";
import Scale from "./Scale";
import DayButtonList from "./DayButtonList";
import "./Home.css";

function Home({
  listOfDayRecords,
  setListOfDayRecords,
  setCurrentDayIndex,
  setListOfThreeQuestions,
  threeRandomQuestions,
}) {
  // user's input
  const [questionOneResponse, setQuestionOneResponse] = useState("");
  const [questionTwoResponse, setQuestionTwoResponse] = useState("");
  const [questionThreeResponse, setQuestionThreeResponse] = useState("");
  const [emotionScaleSelected, setEmotionScaleSelected] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());

  const [quote, setQuote] = useState("");
  const [quoteButton, setQuoteButton] = useState(false);
  const [quoteButtonOpacity, setQuoteButtonOpacity] = useState(1);

  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

  async function callopenAIAPI() {
    // user will not be able to press the Quote Button
    setQuoteButton(true);
    quoteButtonTimer();

    const APIBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "give me a random motivational quote from frog",
        },
      ],
      temperature: 0.7,
      max_tokens: 64,
      top_p: 1,
    };
    try {
      await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + API_KEY,
        },
        body: JSON.stringify(APIBody),
      })
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setQuote(data.choices[0].message.content);
        });
    } catch (e) {
      console.log(e);
    }
  }

  // counts to 10 and after setQuoteButton(false)
  const quoteButtonTimer = () => {
    var timer = 10;
    setQuoteButtonOpacity(0.5);
    const interval = setInterval(() => {
      timer--;
      if (timer < 0) {
        setQuoteButton(false);
        setQuoteButtonOpacity(1);
        clearInterval(interval);
      }
    }, 1000);
  };

  // when "Submit" is pressed, listOfThreeQuestions and listOfDayRecords is updated.
  // all input options are set back to default.
  // listOfThreeQuestions and listOfDayRecords is updated for localStorage
  const handleSubmit = () => {
    setListOfThreeQuestions((listOfThreeQuestions) => {
      const updatedList = [...listOfThreeQuestions, threeRandomQuestions];
      localStorage.setItem("listOfThreeQuestions", JSON.stringify(updatedList));
      return updatedList;
    });

    const form = {
      questionOneResponse,
      questionTwoResponse,
      questionThreeResponse,
      emotionScaleSelected,
    };

    setListOfDayRecords((listOfDayRecords) => {
      const updatedList = [...listOfDayRecords, form];
      localStorage.setItem("listOfDayRecords", JSON.stringify(updatedList));
      return updatedList;
    });
    setQuestionOneResponse("");
    setQuestionTwoResponse("");
    setQuestionThreeResponse("");
    setEmotionScaleSelected(5);
  };

  // clears all localStorage when "Clear" is pressed
  const handleClear = () => {
    localStorage.clear();
    setListOfDayRecords([]);
    setListOfThreeQuestions([]);
  };

  // updates clock every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // when a Day button is pressed we set Current Day Display accordingly
  const handleDayButton = (idx) => {
    setCurrentDayIndex(idx);

    const updatedList = [
      listOfDayRecords[idx]?.questionOneResponse,
      listOfDayRecords[idx]?.questionTwoResponse,
      listOfDayRecords[idx]?.questionThreeResponse,
      listOfDayRecords[idx]?.emotionScaleSelected,
    ];
    localStorage.setItem("currentDayDisplay", JSON.stringify(updatedList));
    return updatedList;
  };

  // returns listOfDayRecords stored in localStorage
  const getListOfDayRecords = () => {
    const parsedData = JSON.parse(localStorage.getItem("listOfDayRecords"));
    return parsedData;
  };

  return (
    <div className="App">
      <div>
        <p className="quote">{quote}</p>
        <button
          disabled={quoteButton}
          onClick={callopenAIAPI}
          className="quoteButton"
          style={{ opacity: quoteButtonOpacity }}
        >
          Froggy Quote of the Day
        </button>
      </div>
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
        setFunction={setEmotionScaleSelected}
        value={emotionScaleSelected}
      />

      <div className="endAction">
        <button className="submitButton" onClick={handleSubmit}>
          Submit
        </button>
        <button className="clearButton" onClick={handleClear}>
          Clear
        </button>
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
