import React, { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [playerInputs, setPlayerInputs] = useState({});
  const [errorMessages, setErrorMessages] = useState([]);

  const updateLevel = (newLevel) => {
    setLevel(newLevel);
  };

  const updateScore = (newScore) => {
    setScore(newScore);
  };

  const updatePlayerInputs = (inputs) => {
    setPlayerInputs(inputs);
  };

  const addErrorMessage = (message) => {
    setErrorMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <GameContext.Provider
      value={{
        level,
        score,
        playerInputs,
        errorMessages,
        updateLevel,
        updateScore,
        updatePlayerInputs,
        addErrorMessage,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};