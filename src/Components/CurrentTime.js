function CurrentTime({ currentDate }) {
  const formattedDate = currentDate.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  });

  return (
    <div>
      <p>Current Date and Time:</p>
      <p>{formattedDate}</p>
    </div>
  );
}

export default CurrentTime;
