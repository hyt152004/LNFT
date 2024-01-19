import { useState } from "react";
import "./Scale.css";

function Scale({ setFunction }) {
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const emojiList = ["😃", "🙂", "😐", "🙁", "😭"];

  return (
    <div>
      <div className="emotionSelection">
        <label htmlFor="selectEmotionScale">Emotion Scale: </label>

        {emojiList.map((item, index) => (
          <p
            key={index}
            onClick={() => {
              setSelectedEmoji(item);
              setFunction(item);
            }}
          >
            {item}
          </p>
        ))}
      </div>
      <p>{selectedEmoji}</p>
    </div>
  );
}

export default Scale;
