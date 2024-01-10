function DayPage({ currentDayDisplay, currentDayIndex, listOfThreeQuestions }) {
  return (
    <div>
      {currentDayDisplay.map((info, idx) => (
        <div key={idx}>
          <b>{listOfThreeQuestions[currentDayIndex - 1]?.[idx]}</b>
          <p>{info}</p>
        </div>
      ))}
    </div>
  );
}

export default DayPage;
