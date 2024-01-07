function DayPage({ currentDayDisplay }) {
  return (
    <div>
      {currentDayDisplay.map((info, idx) => (
        <p key={idx}>{info}</p>
      ))}
    </div>
  );
}

export default DayPage;
