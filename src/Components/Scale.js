import React, { useState } from "react";
import "./Scale.css";
import angryFrog from "../Assets/angryFrog.png";
import annoyedFrog from "../Assets/annoyedFrog.png";
import chillFrog from "../Assets/chillFrog.png";
import gratefulFrog from "../Assets/gratefulFrog.png";
import happyFrog from "../Assets/happyFrog.png";
import neutralFrog from "../Assets/neutralFrog.png";
import surprisedFrog from "../Assets/suprisedFrog.png"; // Corrected typo in asset import

function Scale({ setFunction }) {
  const FrogList = [
    angryFrog,
    annoyedFrog,
    chillFrog,
    gratefulFrog,
    happyFrog,
    neutralFrog,
    surprisedFrog,
  ];

  const [selectedFrog, setSelectedFrog] = useState(null);

  return (
    <div>
      <div className="emotionSelection">
        <label htmlFor="selectEmotionScale" className="statement">
          Which Froggy Represents You Today
        </label>
        <div>
          {FrogList.map((item, index) => (
            <img
              src={item}
              alt=""
              width={100}
              height={100}
              key={index}
              style={{ opacity: selectedFrog === item ? 1 : 0.5 }}
              onClick={() => {
                setSelectedFrog(item);
                setFunction(item);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Scale;
