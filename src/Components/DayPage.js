function DayPage({ currentDayDisplay, currentDayIndex, listOfThreeQuestions }) {
  return (
    <div>
      {currentDayDisplay.map((info, idx) => (
        <div key={idx}>
          <b>{listOfThreeQuestions[currentDayIndex]?.[idx]}</b>
          <p>{info}</p>
        </div>
      ))}
    </div>
  );
}

export default DayPage;
