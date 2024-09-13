import { useEffect } from "react";
import useCharacter from "./useCharacter";
import useLevelController from "./useLevelController";

const useCanvasController = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  const { setLevel, renderLevel, obstacles } = useLevelController();

  const spriteSize = 64;
  const speed = 5;

  const { setTargetPosition, drawCharacter } = useCharacter(
    spriteSize,
    speed,
    obstacles
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
  }, [canvasRef, drawCharacter, setTargetPosition]);

  return {
    canvasWidth: 1920,
    canvasHeight: 1080,
  };
};

export default useCanvasController;
