import { Link } from "react-router-dom";

function DayButtonList({ listOfDayRecords, handleDayButton, currentDate }) {
  const formattedDate = currentDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <div class="grid text-center">
        {listOfDayRecords &&
        Array.isArray(listOfDayRecords) &&
        listOfDayRecords.length > 0 ? (
          listOfDayRecords.map((day, idx) => (
            <div class="g-col-4">
              <Link key={idx} to="/about">
                <button
                  class="btn btn-success"
                  onClick={() => {
                    handleDayButton(idx);
                  }}
                >
                  {formattedDate}
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p>No records available</p>
        )}
      </div>
    </div>
  );
}

export default DayButtonList;
