import React, { useState, useEffect } from "react";
import GameCanvas from "../GameCanvas/GameCanvas";
import CodeEditor from "../CodeEditor/CodeEditor";
import LevelSelector from "../LevelSelector/LevelSelector";
import levels from "../../data/levels";
import { calculateProjectileMotion } from "../../utils/physics";
import "./Game.css";

const Game = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [playerInputs, setPlayerInputs] = useState({ speed: 0, angle: 0 });
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [projectilePath, setProjectilePath] = useState([]);

  // Set default level data
  const defaultLevel = levels[0] || { id: 0, parameters: {} };
  const [targetPosition, setTargetPosition] = useState({
    x: defaultLevel.parameters.distance || 0,
    y: 0,
  });
  const [obstacles, setObstacles] = useState([]);

  useEffect(() => {
    if (currentLevel < levels.length) {
      const level = levels[currentLevel];
      setTargetPosition({ x: level.parameters.distance || 0, y: 0 });
      // Reset other state as needed
      setPlayerInputs({ speed: 0, angle: 0 });
      setResult(null);
      setError("");
      setProjectilePath([]);
    }
  }, [currentLevel]);

  const handleCodeSubmit = (code) => {
    try {
      // Extract speed and angle from code or use a simplified approach
      // This is a simplified example:
      const speedMatch = code.match(/speed\s*=\s*(\d+)/);
      const angleMatch = code.match(/angle\s*=\s*(\d+)/);

      if (speedMatch && angleMatch) {
        const speed = parseInt(speedMatch[1]);
        const angle = parseInt(angleMatch[1]);
        setPlayerInputs({ speed, angle });
        handleSubmit();
      } else {
        setError("Could not find speed and angle in your code");
      }
    } catch (error) {
      setError("Error in your code: " + error.message);
    }
  };

  const handleSubmit = () => {
    if (currentLevel < levels.length) {
      const level = levels[currentLevel];
      const { speed, angle } = playerInputs;

      // Calculate trajectory
      const calculatedPath = generateProjectilePath(speed, angle);
      setProjectilePath(calculatedPath);

      // Check if landed at target
      const lastPoint = calculatedPath[calculatedPath.length - 1];
      const targetHit = Math.abs(lastPoint.x - targetPosition.x) < 10;

      if (targetHit) {
        setResult("Success! Projectile landed correctly.");
        setScore(score + 1);
      } else {
        setResult("Failed! Try again.");
        setError("Incorrect inputs. Please adjust your speed and angle.");
      }
    }
  };

  // Generate a simple projectile path
  const generateProjectilePath = (speed, angle) => {
    const path = [];
    const g = 9.81;
    const radians = angle * (Math.PI / 180);

    for (let t = 0; t <= 10; t += 0.1) {
      const x = speed * Math.cos(radians) * t;
      const y = speed * Math.sin(radians) * t - 0.5 * g * t * t;

      if (y < 0) break; // Stop when hitting ground
      path.push({ x, y });
    }

    return path;
  };

  return (
    <div className="game-container">
      <h2>Level: {currentLevel + 1}</h2>
      <LevelSelector setLevel={setCurrentLevel} />
      <CodeEditor onCodeSubmit={handleCodeSubmit} />
      <button onClick={handleSubmit}>Launch</button>
      {result && <p>{result}</p>}
      {error && <p className="error">{error}</p>}
      <GameCanvas
        projectilePath={projectilePath}
        targetPosition={targetPosition}
        obstacles={obstacles}
      />
    </div>
  );
};

export default Game;
