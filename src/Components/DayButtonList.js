import { Link } from "react-router-dom";

function DayButtonList({ listOfDayRecords, handleDayButton }) {
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
              Day {idx + 1}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DayButtonList;
