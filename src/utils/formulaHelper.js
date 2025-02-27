function getTrajectoryFormula() {
  return {
    speed: (distance, time) => distance / time,
    angle: (height, distance) => Math.atan(height / distance) * (180 / Math.PI),
    projectileMotion: (initialSpeed, angle, time) => {
      const g = 9.81; // acceleration due to gravity
      const radians = angle * (Math.PI / 180);
      const x = initialSpeed * Math.cos(radians) * time;
      const y = (initialSpeed * Math.sin(radians) * time) - (0.5 * g * time * time);
      return { x, y };
    }
  };
}

function getDriftParameters(inputParams) {
  const { speed, angle } = inputParams;
  const driftFactor = 0.1; // Example drift factor
  return {
    adjustedSpeed: speed + (driftFactor * speed),
    adjustedAngle: angle + (driftFactor * angle)
  };
}

export { getTrajectoryFormula, getDriftParameters };