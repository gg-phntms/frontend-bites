"use client";

import { ImageContainer } from "./styles";
import { useEffect, useRef } from "react";

// This isn't a reusable component; it'll have to be remade for each SVG.

const LineDraw = () => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();

      pathRef.current.style.stroke = "#eee";
      pathRef.current.style.strokeDasharray = `${length}`;
      pathRef.current.style.strokeDashoffset = `${-length}`;
    }
  }, []);

  return (
    <ImageContainer>
      <svg viewBox="0 0 812.3 583.61">
        <path
          ref={pathRef}
          d="m406.15 558.61-38.11-38.11h76.23l-38.11 38.11v-76.23h0c0-42.1 34.13-76.23 76.23-76.23h228.69c42.1 0 76.23-34.13 76.23-76.23h0V215.58c0-21.05-17.06-38.11-38.11-38.11h0c-21.05 0-38.11 17.06-38.11 38.11v76.23c0 21.05-17.06 38.11-38.11 38.11h0c-21.05 0-38.11-17.06-38.11-38.11v-76.23c0-21.05-17.06-38.11-38.11-38.11h0c-21.05 0-38.11 17.06-38.11 38.11v76.23c0 21.05-17.06 38.11-38.11 38.11h0c-21.05 0-38.11-17.06-38.11-38.11v-76.23c0-21.05-17.06-38.11-38.11-38.11h0c-21.05 0-38.11 17.06-38.11 38.11v76.23c0 21.05-17.06 38.11-38.11 38.11h0c-21.05 0-38.11-17.06-38.11-38.11v-76.23c0-21.05-17.06-38.11-38.11-38.11h0c-21.05 0-38.11 17.06-38.11 38.11v76.23c0 21.05-17.06 38.11-38.11 38.11h0c-21.05 0-38.11-17.06-38.11-38.11v-76.23c0-21.05-17.06-38.11-38.11-38.11h0c-21.05 0-38.11 17.06-38.11 38.11v76.23c0 21.05-17.06 38.11-38.11 38.11h0c-21.05 0-38.11-17.06-38.11-38.11V177.47s0 0 0 0c0-42.1 34.13-76.23 76.23-76.23h647.95c21.05 0 38.11-17.06 38.11-38.11h0c0-21.05-17.06-38.11-38.11-38.11H25"
          fill="none"
          stroke="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="50px"
        />
      </svg>
    </ImageContainer>
  );
};

export default LineDraw;
