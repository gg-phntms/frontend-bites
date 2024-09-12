"use client"

import { useEffect, useRef } from "react";
import { CanvasContainer } from "./styles";
import useCanvasController from './hooks/useCanvasController';

const Canvas = () => {
  const canvasRef = useRef(null)
  const { canvasWidth, canvasHeight } = useCanvasController(canvasRef);

  return (
    <CanvasContainer ref={canvasRef} width={canvasWidth} height={canvasHeight} />
  );
};

export default Canvas;
