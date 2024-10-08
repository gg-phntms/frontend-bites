"use client";

import { useState, useCallback } from "react";

const useObstacles = () => {
  const [obstacles, setObstacles] = useState<
    { x: number; y: number; width: number; height: number }[]
  >([]);

  const drawObstacles = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      if (!ctx) return;

      // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

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
  };
};

export default useObstacles;
