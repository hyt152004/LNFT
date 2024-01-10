function DayPage({ currentDayDisplay, currentDayIndex }) {
  // returns listOfThreeQuestions stored in localStorage
  const getListOfThreeQuestions = () => {
    const parsedData = JSON.parse(localStorage.getItem("listOfThreeQuestions"));
    return parsedData;
  };

  // returns currentDayDisplay stored in localStorage
  const getcurrentDayDisplay = () => {
    const parsedData = JSON.parse(localStorage.getItem("currentDayDisplay"));
    return parsedData;
  };

  return (
    <div>
      {getcurrentDayDisplay() &&
        getcurrentDayDisplay().map((info, idx) => (
          <div key={idx}>
            <b>{getListOfThreeQuestions()[currentDayIndex]?.[idx]}</b>
            <p>{info}</p>
          </div>
        ))}
    </div>
  );
}

export default DayPage;
