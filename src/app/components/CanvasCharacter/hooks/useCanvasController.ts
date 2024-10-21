import { useEffect } from "react";
import useCharacter from "./useCharacter";
import useLevelController from "./useLevelController";
import { Level } from "../utils/constants";
import useObstacles from "./useObstacles";
import useTeleports from "./useTeleports";

const useCanvasController = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  const spriteSize = 64;
  const speed = 5;

  const { checkCollisions } = useObstacles(spriteSize);
  const { checkTeleports } = useTeleports(spriteSize);

  const {
    level,
    setLevel,
    prevLevel,
    setPrevLevel,
    renderLevel,
    obstacles,
    teleports,
  } = useLevelController(spriteSize);

  // Teleport to another level
  const updateLevel = (newLevel: Level) => {
    if (!Object.values(Level).includes(newLevel)) return;

    setPosition({ x: 960, y: 720 });
    setTargetPosition({ x: 960, y: 720 });
    setLevel(newLevel);
  };

  const { setPosition, setTargetPosition, drawCharacter } = useCharacter(
    spriteSize,
    speed,
    obstacles,
    checkCollisions,
    teleports,
    checkTeleports,
    updateLevel
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      renderLevel(ctx);
      drawCharacter(ctx);

      requestAnimationFrame(render);
    };

    render();

    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      const x = (e.clientX - rect.left) * scaleX;
      const y = (e.clientY - rect.top) * scaleY;

      setTargetPosition({ x: x - spriteSize / 2, y: y - spriteSize / 2 });
    };

    canvas.addEventListener("click", handleCanvasClick);

    return () => {
      canvas.removeEventListener("click", handleCanvasClick);
    };
  }, [canvasRef, drawCharacter, setTargetPosition, level, renderLevel]);

  useEffect(() => {
    if (prevLevel !== level) {
      updateLevel(level as Level);
      setPrevLevel(level);
    }
  }, [level, prevLevel, setPrevLevel]);

  return {
    canvasWidth: 1920,
    canvasHeight: 1080,
  };
};

export default useCanvasController;
