function Scale({ purpose, id, setFunction, value }) {
  const handleScaleChange = (value, operation) => {
    operation(value);
  };

  return (
    <div>
      <label htmlFor={id}>{purpose}:</label>
      <input
        type="number"
        id={id}
        name="numberInput"
        min={1}
        max={10}
        value={value}
        onChange={(e) => handleScaleChange(e.target.value, setFunction)}
      />
    </div>
  );
}

export default Scale;
