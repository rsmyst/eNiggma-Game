function evaluateCode(inputSpeed, inputAngle, expectedSpeed, expectedAngle) {
    const speedError = inputSpeed - expectedSpeed;
    const angleError = inputAngle - expectedAngle;

    return {
        speedError,
        angleError,
        isCorrect: speedError === 0 && angleError === 0
    };
}

function findDrift(inputs, expectedOutputs) {
    const driftPatterns = inputs.map((input, index) => {
        const { speed, angle } = input;
        const { expectedSpeed, expectedAngle } = expectedOutputs[index];
        return evaluateCode(speed, angle, expectedSpeed, expectedAngle);
    });

    return driftPatterns;
}

function correctInput(input, drift) {
    return {
        correctedSpeed: input.speed - drift.speedError,
        correctedAngle: input.angle - drift.angleError
    };
}

export { evaluateCode, findDrift, correctInput };