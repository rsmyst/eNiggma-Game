const levels = [
  {
    id: 1,
    description: "Level 1: Basic Launch",
    parameters: {
      height: 1,
      distance: 5,
      speed: 10,
      angle: 45,
    },
    expectedOutput: {
      landingPosition: { x: 5, y: 0 },
      success: true,
    },
    drift: {
      m: 0.1,
      c: 0,
    },
  },
  {
    id: 2,
    description: "Level 2: Increased Height",
    parameters: {
      height: 3,
      distance: 7,
      speed: 12,
      angle: 50,
    },
    expectedOutput: {
      landingPosition: { x: 7, y: 0 },
      success: true,
    },
    drift: {
      m: 0.2,
      c: 1,
    },
  },
  {
    id: 3,
    description: "Level 3: Obstacle Course",
    parameters: {
      height: 2,
      distance: 10,
      speed: 15,
      angle: 40,
    },
    expectedOutput: {
      landingPosition: { x: 10, y: 0 },
      success: true,
    },
    drift: {
      m: 0.15,
      c: -1,
    },
  },
  {
    id: 4,
    description: "Level 4: Advanced Angles",
    parameters: {
      height: 4,
      distance: 12,
      speed: 14,
      angle: 60,
    },
    expectedOutput: {
      landingPosition: { x: 12, y: 0 },
      success: true,
    },
    drift: {
      m: 0.25,
      c: 2,
    },
  },
];

export default levels;