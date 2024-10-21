// useCharacter.ts
import { useEffect, useRef, useState } from "react";
import { Level, Obstacle, Teleport } from "../utils/constants";
import useLevelController from "./useLevelController";

const useCharacter = (
  spriteSize: number,
  speed: number,
  obstacles: Obstacle[],
  checkCollisions: (objects: Obstacle[], x: number, y: number) => boolean,
  teleports: Teleport[],
  checkTeleports: (
    teleports: Teleport[],
    x: number,
    y: number
  ) => Teleport | null,
  updateLevel: (newLevel: Level) => void
) => {
  const [position, setPosition] = useState({ x: 960, y: 720 });
  const [targetPosition, setTargetPosition] = useState({ x: 960, y: 720 });
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(position);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const { level } = useLevelController(spriteSize);

  useEffect(() => {
    positionRef.current = position;
  }, [position]);

  // Cancel animation if targetPosition is updated
  useEffect(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, [targetPosition]);

  // Load character image
  useEffect(() => {
    const image = new Image();
    image.src = "/images/starstruck.png";
    imageRef.current = image;
  }, []);

  // Draw character on the canvas
  const drawCharacter = (ctx: CanvasRenderingContext2D) => {
    if (imageRef.current) {
      ctx.drawImage(
        imageRef.current,
        position.x,
        position.y,
        spriteSize,
        spriteSize
      );
    }
  };

  useEffect(() => {
    const animate = () => {
      const dx = targetPosition.x - positionRef.current.x;
      const dy = targetPosition.y - positionRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > speed) {
        const moveX = (dx / distance) * speed;
        const moveY = (dy / distance) * speed;

        // Check next position for collision
        const nextX = positionRef.current.x + moveX;
        const nextY = positionRef.current.y + moveY;

        if (!checkCollisions(obstacles, nextX, nextY)) {
          setPosition((prevPosition) => ({
            x: prevPosition.x + moveX,
            y: prevPosition.y + moveY,
          }));

          animationRef.current = requestAnimationFrame(animate);
        } else {
          const teleport = checkTeleports(teleports, nextX, nextY);
          if (teleport) updateLevel(teleport.destination as Level);
        }
      } else {
        setPosition(targetPosition);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }
        const teleport = checkTeleports(
          teleports,
          positionRef.current.x,
          positionRef.current.y
        );

        if (teleport) updateLevel(teleport.destination as Level);
      }
    };

    if (
      targetPosition.x !== positionRef.current.x ||
      targetPosition.y !== positionRef.current.y
    ) {
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [targetPosition, speed, obstacles]);

  return {
    position,
    targetPosition,
    setPosition,
    setTargetPosition,
    drawCharacter,
  };
};

export default useCharacter;
