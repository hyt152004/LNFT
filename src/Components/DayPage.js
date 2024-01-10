function DayPage({
  currentDayDisplay,
  currentDayIndex,
  setCurrentDayIndex,
  listOfThreeQuestions,
}) {
  // returns listOfThreeQuestions stored in localStorage
  const getListOfThreeQuestions = () => {
    const parsedData = JSON.parse(localStorage.getItem("listOfThreeQuestions"));
    return parsedData;
  };
  return (
    <div>
      {currentDayDisplay.map((info, idx) => (
        <div key={idx}>
          <b>{getListOfThreeQuestions()[currentDayIndex]?.[idx]}</b>
          <p>{info}</p>
        </div>
      ))}
    </div>
  );
}

export default DayPage;
