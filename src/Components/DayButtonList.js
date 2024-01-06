function DayButtonList({
  listOfDayRecords,
  currentDayDisplay,
  handleDayButton,
}) {
  return (
    <div>
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

export default DayButtonList;
