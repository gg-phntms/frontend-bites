"use client";

import { useState, useCallback } from "react";
import { Obstacle } from "../utils/constants";

const useObstacles = (spriteSize: number) => {
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);

  const checkCollisions = (
    obstacles: Obstacle[],
    x: number,
    y: number
  ): boolean => {
    return obstacles.some(
      (obstacle: Obstacle) =>
        x < obstacle.x + obstacle.width &&
        x + spriteSize > obstacle.x &&
        y < obstacle.y + obstacle.height &&
        y + spriteSize > obstacle.y
    );
  };

  const drawObstacles = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      if (!ctx) return;

      obstacles.forEach((obstacle) => {
        ctx.fillStyle = "gray";
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      });
    },
    [obstacles]
  );

  return {
    obstacles,
    setObstacles,
    drawObstacles,
    checkCollisions,
  };
};

export default useObstacles;
