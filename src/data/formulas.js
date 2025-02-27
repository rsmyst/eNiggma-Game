export const trajectoryFormulas = {
  calculateRange: (velocity, angle) => {
    const g = 9.81; // acceleration due to gravity in m/s^2
    return (Math.pow(velocity, 2) * Math.sin(2 * angle)) / g;
  },
  calculateMaxHeight: (velocity, angle) => {
    const g = 9.81; // acceleration due to gravity in m/s^2
    return (Math.pow(velocity * Math.sin(angle), 2)) / (2 * g);
  },
  calculateTimeOfFlight: (velocity, angle) => {
    const g = 9.81; // acceleration due to gravity in m/s^2
    return (2 * velocity * Math.sin(angle)) / g;
  },
  calculateVelocityComponents: (velocity, angle) => {
    return {
      vx: velocity * Math.cos(angle),
      vy: velocity * Math.sin(angle),
    };
  },
  calculateProjectilePosition: (velocity, angle, time) => {
    const g = 9.81; // acceleration due to gravity in m/s^2
    const vx = velocity * Math.cos(angle);
    const vy = velocity * Math.sin(angle);
    const x = vx * time;
    const y = vy * time - 0.5 * g * Math.pow(time, 2);
    return { x, y };
  },
};