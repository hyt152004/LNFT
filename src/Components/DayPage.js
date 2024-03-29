import "./dayPage.css";

function DayPage({ currentDayIndex }) {
  // Retrieve and parse data from localStorage
  const listOfThreeQuestions =
    JSON.parse(localStorage.getItem("listOfThreeQuestions")) || [];
  const listOfDayRecords =
    JSON.parse(localStorage.getItem("listOfDayRecords")) || [];

  // Retrieve records for the current day index
  const recordsForCurrentDay = listOfDayRecords[currentDayIndex] || [];
  // given a non-array key-value form, return an array of key, value
  const result = Object.entries(recordsForCurrentDay).map(([key, value]) => {
    return { key, value };
  });
  // given an array of key and value, return an array of only the values
  const allValues = result.map((entry) => entry.value);

  return (
    <div className="dayPage">
      {Array.isArray(allValues) ? (
        allValues.map((info, idx) => (
          <div key={idx} className="infoSection">
            <b>{listOfThreeQuestions[currentDayIndex]?.[idx]}</b>
            <p>
              {idx !== 3 ? (
                info
              ) : (
                <img src={info} alt="Not Loading :(" width={50} height={50} />
              )}
            </p>
          </div>
        ))
      ) : (
        <p>No records available for the current day.</p>
      )}
    </div>
  );
}

export default DayPage;
