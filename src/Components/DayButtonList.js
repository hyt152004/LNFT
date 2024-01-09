import { Link } from "react-router-dom";

function DayButtonList({ listOfDayRecords, handleDayButton, currentDate }) {
  const formattedDate = currentDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <div className="listOfDayRecords">
        {listOfDayRecords.map((day, idx) => (
          <Link key={idx} to="/about">
            <button
              onClick={() => {
                handleDayButton(idx);
              }}
            >
              {formattedDate}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DayButtonList;
