"use client";

import useObstacles from "./useObstacles";
import data from "../utils/levelData.json";
import { useCallback, useEffect, useState } from "react";
import { Levels } from "../utils/constants";
import useBackgroundImage from "./useBackgroundImage";

const useLevelController = () => {
  const [level, setLevel] = useState(Levels.PLAZA);
  const { obstacles, setObstacles, drawObstacles } = useObstacles();
  const { drawBackgroundImage } = useBackgroundImage(
    data[level].backgroundImage,
    1920,
    1080
  );

  useEffect(() => {
    setObstacles(data[level].obstacles);
  }, [setObstacles]);

  const renderLevel = useCallback((ctx: CanvasRenderingContext2D) => {
    if (!ctx) return;

    drawObstacles(ctx);
    drawBackgroundImage(ctx);
  }, []);

  return { setLevel, renderLevel, obstacles };
};

export default useLevelController;
