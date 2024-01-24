import { Link } from "react-router-dom";
import "./dayButtonList.css";

function DayButtonList({ listOfDayRecords, handleDayButton, currentDate }) {
  const formattedDate = currentDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      {listOfDayRecords &&
      Array.isArray(listOfDayRecords) &&
      listOfDayRecords.length > 0 ? (
        <div className="listOfDays">
          {listOfDayRecords.map((day, idx) => (
            <Link key={idx} to="/about">
              <button
                className="dayButton"
                onClick={() => {
                  handleDayButton(idx);
                }}
              >
                {formattedDate}
              </button>
            </Link>
          ))}
        </div>
      ) : (
        <p>No records available</p>
      )}
    </div>
  );
}

export default DayButtonList;
