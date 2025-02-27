import { useState, useEffect } from 'react';

const useGameState = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [playerInputs, setPlayerInputs] = useState({ speed: 0, angle: 0 });
  const [isLevelPassed, setIsLevelPassed] = useState(false);

  const resetGame = () => {
    setCurrentLevel(0);
    setScore(0);
    setPlayerInputs({ speed: 0, angle: 0 });
    setIsLevelPassed(false);
  };

  const updatePlayerInputs = (newInputs) => {
    setPlayerInputs(newInputs);
  };

  const passLevel = () => {
    setIsLevelPassed(true);
    setScore((prevScore) => prevScore + 1);
    setCurrentLevel((prevLevel) => prevLevel + 1);
  };

  useEffect(() => {
    if (isLevelPassed) {
      // Reset or move to the next level logic
    }
  }, [isLevelPassed]);

  return {
    currentLevel,
    score,
    playerInputs,
    isLevelPassed,
    resetGame,
    updatePlayerInputs,
    passLevel,
  };
};

export default useGameState;