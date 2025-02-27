import React from "react";
import PropTypes from "prop-types";
import "./ProjectilePath.css";

const ProjectilePath = ({ initialSpeed, launchAngle }) => {
  const calculateTrajectory = () => {
    const g = 9.81; // acceleration due to gravity in m/s^2
    const angleInRadians = (launchAngle * Math.PI) / 180;
    const timeOfFlight = (2 * initialSpeed * Math.sin(angleInRadians)) / g;
    const maxHeight = (initialSpeed ** 2) * (Math.sin(angleInRadians) ** 2) / (2 * g);
    const range = (initialSpeed ** 2 * Math.sin(2 * angleInRadians)) / g;

    return { timeOfFlight, maxHeight, range };
  };

  const { timeOfFlight, maxHeight, range } = calculateTrajectory();

  return (
    <div className="projectile-path">
      <h2>Projectile Path</h2>
      <p>Initial Speed: {initialSpeed} m/s</p>
      <p>Launch Angle: {launchAngle}°</p>
      <p>Time of Flight: {timeOfFlight.toFixed(2)} s</p>
      <p>Maximum Height: {maxHeight.toFixed(2)} m</p>
      <p>Range: {range.toFixed(2)} m</p>
    </div>
  );
};

ProjectilePath.propTypes = {
  initialSpeed: PropTypes.number.isRequired,
  launchAngle: PropTypes.number.isRequired,
};

export default ProjectilePath;