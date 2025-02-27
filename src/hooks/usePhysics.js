import { useState, useEffect } from "react";
import { calculateProjectileMotion } from "../utils/physics";

const usePhysics = (initialSpeed, initialAngle) => {
  const [speed, setSpeed] = useState(initialSpeed);
  const [angle, setAngle] = useState(initialAngle);
  const [trajectory, setTrajectory] = useState(null);

  useEffect(() => {
    const newTrajectory = calculateProjectileMotion(speed, angle);
    setTrajectory(newTrajectory);
  }, [speed, angle]);

  const updateSpeed = (newSpeed) => {
    setSpeed(newSpeed);
  };

  const updateAngle = (newAngle) => {
    setAngle(newAngle);
  };

  return {
    speed,
    angle,
    trajectory,
    updateSpeed,
    updateAngle,
  };
};

export default usePhysics;