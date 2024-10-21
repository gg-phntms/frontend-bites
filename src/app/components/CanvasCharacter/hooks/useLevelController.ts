"use client";

import useObstacles from "./useObstacles";
import data from "../utils/levelData.json";
import { useCallback, useEffect, useState } from "react";
import { Level } from "../utils/constants";
import useBackgroundImage from "./useBackgroundImage";
import useTeleports from "./useTeleports";

const useLevelController = (spriteSize: number) => {
  const [level, setLevel] = useState<Level>(Level.TOWN);
  const [prevLevel, setPrevLevel] = useState<Level>(Level.TOWN);
  const { obstacles, setObstacles, drawObstacles } = useObstacles(spriteSize);
  const { teleports, setTeleports, drawTeleports } = useTeleports(spriteSize);
  const { drawBackgroundImage } = useBackgroundImage(
    data[level].backgroundImage,
    1920,
    1080
  );

  useEffect(() => {
    setObstacles(data[level].obstacles);
    setTeleports(data[level].teleports);
  }, [obstacles, setObstacles, teleports, setTeleports, level]);

  const renderLevel = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      if (!ctx) return;

      drawObstacles(ctx);
      drawTeleports(ctx);
      drawBackgroundImage(ctx);
    },
    [drawObstacles, drawTeleports]
  );

  return {
    level,
    setLevel,
    prevLevel,
    setPrevLevel,
    renderLevel,
    obstacles,
    teleports,
  };
};

export default useLevelController;
