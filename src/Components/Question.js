import React from "react";
import "./question.css";

function Question({ question, name, value, setFunction }) {
  const handleTextAreaChange = (value, operation) => {
    operation(value);
  };

  return (
    <label>
      <p className="question">{question}</p>
      <textarea
        placeholder="Enter your response here!"
        name={name}
        value={value}
        onChange={(e) => {
          handleTextAreaChange(e.target.value, setFunction);
        }}
      ></textarea>
    </label>
  );
}

export default Question;
