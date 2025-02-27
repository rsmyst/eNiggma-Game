import React from "react";
import levels from "../../data/levels";
import "./LevelSelector.css";

const LevelSelector = ({ setLevel }) => {
  const handleLevelSelect = (levelIndex) => {
    setLevel(levelIndex);
  };

  return (
    <div className="level-selector">
      <h3>Select a Level</h3>
      <div className="level-buttons">
        {levels.map((level, index) => (
          <button
            key={index}
            onClick={() => handleLevelSelect(index)}
            className="level-button"
          >
            Level {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LevelSelector;
