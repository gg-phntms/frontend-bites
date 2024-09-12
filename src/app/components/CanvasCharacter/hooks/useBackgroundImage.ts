"use client";

import { useEffect, useRef } from "react";

const useBackgroundImage = (image: string, width: number, height: number) => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  // Load background image
  useEffect(() => {
    const background = new Image();
    background.src = image;
    imageRef.current = background;
  }, [image]);

  // Draw background on the canvas
  const drawBackgroundImage = (ctx: CanvasRenderingContext2D) => {
    if (imageRef.current) {
      ctx.drawImage(imageRef.current, 0, 0, width, height);
    }
  };

  return {
    drawBackgroundImage,
  };
};

export default useBackgroundImage;
