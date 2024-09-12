// useCanvasController.ts
import { useEffect } from "react";
import useObstacles from "./useObstacles";
import useCharacter from "./useCharacter";
import useBackgroundImage from "./useBackgroundImage";

const useCanvasController = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  const { obstacles, setObstacles, drawObstacles } = useObstacles();

  const { drawBackgroundImage } = useBackgroundImage(
    "/images/town.webp",
    1920,
    1080
  );
  const imageSize = 64;
  const speed = 5;

  useEffect(() => {
    setObstacles([
      { x: 0, y: 0, width: 1920, height: 430 },
      { x: 0, y: 430, width: 620, height: 100 },
      { x: 250, y: 530, width: 200, height: 70 },
      { x: 0, y: 740, width: 300, height: 340 },
      { x: 300, y: 960, width: 200, height: 120 },
      { x: 1380, y: 430, width: 540, height: 150 },
      { x: 1620, y: 840, width: 300, height: 240 },
    ]);
  }, [setObstacles]);

  const {
    position,
    targetPosition,
    setPosition,
    setTargetPosition,
    drawCharacter,
  } = useCharacter(imageSize, speed, obstacles); // Pass obstacles here

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawObstacles(ctx);
      drawBackgroundImage(ctx);
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

      setTargetPosition({ x: x - imageSize / 2, y: y - imageSize / 2 });
    };

    canvas.addEventListener("click", handleCanvasClick);

    return () => {
      canvas.removeEventListener("click", handleCanvasClick);
    };
  }, [
    canvasRef,
    drawObstacles,
    drawCharacter,
    drawBackgroundImage,
    setTargetPosition,
  ]);

  return {
    position,
    targetPosition,
    setPosition,
    setTargetPosition,
    canvasWidth: 1920,
    canvasHeight: 1080,
    canvasRef,
  };
};

export default useCanvasController;
