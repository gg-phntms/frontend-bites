"use client";

import { useState, useCallback } from "react";
import { Teleport } from "../utils/constants";

const useTeleports = (spriteSize: number) => {
  const [teleports, setTeleports] = useState<Teleport[]>([]);

  const checkTeleports = (
    teleports: Teleport[],
    x: number,
    y: number
  ): Teleport | null => {
    const teleport = teleports.find(
      (teleport: Teleport) =>
        x < teleport.x + teleport.width &&
        x + spriteSize > teleport.x &&
        y < teleport.y + teleport.height &&
        y + spriteSize > teleport.y
    );

    return teleport || null;
  };

  const drawTeleports = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      if (!ctx) return;

      teleports.forEach((teleport) => {
        ctx.fillStyle = "tomato";
        ctx.fillRect(teleport.x, teleport.y, teleport.width, teleport.height);
      });
    },
    [teleports]
  );

  return {
    teleports,
    setTeleports,
    drawTeleports,
    checkTeleports,
  };
};

export default useTeleports;
