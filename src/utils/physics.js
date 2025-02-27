function calculateProjectileMotion(speed, angle) {
    const g = 9.81; // acceleration due to gravity in m/s^2
    const radians = angle * (Math.PI / 180); // convert angle to radians

    // Calculate the time of flight
    const timeOfFlight = (2 * speed * Math.sin(radians)) / g;

    // Calculate the maximum height
    const maxHeight = (Math.pow(speed * Math.sin(radians), 2)) / (2 * g);

    // Calculate the horizontal distance
    const horizontalDistance = speed * Math.cos(radians) * timeOfFlight;

    return {
        timeOfFlight: timeOfFlight,
        maxHeight: maxHeight,
        horizontalDistance: horizontalDistance,
    };
}

function calculateDriftedInputs(inputSpeed, inputAngle, m, c) {
    const correctedSpeed = inputSpeed - c; // correct for constant drift
    const correctedAngle = inputAngle - m; // correct for linear drift

    return {
        correctedSpeed: correctedSpeed,
        correctedAngle: correctedAngle,
    };
}

export { calculateProjectileMotion, calculateDriftedInputs };