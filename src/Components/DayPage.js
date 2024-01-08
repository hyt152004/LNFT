function DayPage({ threeQ, currentDayDisplay, currentDayIndex }) {
  return (
    <div>
      {currentDayDisplay.map((info, idx) => (
        <div key={idx}>
          <b>{threeQ[idx]}</b>
          <p>{info}</p>
        </div>
      ))}
    </div>
  );
}

export default DayPage;
