import React, { useEffect, useRef } from "react";
import "./GameCanvas.css";

const GameCanvas = ({ projectilePath, targetPosition, obstacles }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Make sure canvas has dimensions
    canvas.width = canvas.offsetWidth || 800;
    canvas.height = canvas.offsetHeight || 400;

    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Fill canvas with background color to make it visible
    context.fillStyle = "#f8f8f8";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw ground line
    context.beginPath();
    context.moveTo(0, canvas.height - 20);
    context.lineTo(canvas.width, canvas.height - 20);
    context.strokeStyle = "green";
    context.lineWidth = 2;
    context.stroke();

    // Draw target if available
    if (targetPosition) {
      context.fillStyle = "red";
      const targetY = canvas.height - 25; // Just above ground
      context.fillRect(targetPosition.x * 20, targetY, 10, 10);
    }

    // Draw obstacles if available
    if (obstacles && obstacles.length) {
      context.fillStyle = "black";
      obstacles.forEach((obstacle) => {
        context.fillRect(
          obstacle.x,
          obstacle.y,
          obstacle.width,
          obstacle.height
        );
      });
    }

    // Draw projectile path if available
    if (projectilePath && projectilePath.length > 0) {
      context.beginPath();
      // Scale path to fit canvas
      const startX = 50; // Start from left side with offset
      const startY = canvas.height - 20; // Start from ground level

      context.moveTo(startX, startY);

      projectilePath.forEach((point) => {
        // Scale points to fit canvas
        const canvasX = startX + point.x * 20; // Scale factor for better visibility
        const canvasY = startY - point.y * 20; // Flip Y-axis (canvas Y grows downward)
        context.lineTo(canvasX, canvasY);
      });

      context.strokeStyle = "blue";
      context.lineWidth = 2;
      context.stroke();
    }
  }, [projectilePath, targetPosition, obstacles]);

  return (
    <div
      className="game-canvas-container"
      style={{ width: "100%", height: "300px", margin: "20px 0" }}
    >
      <canvas
        ref={canvasRef}
        className="game-canvas"
        style={{ width: "100%", height: "100%", border: "1px solid #ccc" }}
      />
    </div>
  );
};

export default GameCanvas;
