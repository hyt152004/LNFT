import "./currentTime.css";

function CurrentTime({ currentDate }) {
  const formattedDate = currentDate.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  });

  return (
    <div>
      <p className="time">Date and Time:</p>
      <p className="time">{formattedDate}</p>
    </div>
  );
}

export default CurrentTime;
