"use client";

import Image from "next/image";
import { ImageHoverTextContainer, ImageContainer } from "./styles";
import { useEffect, useRef, useState } from "react";

interface Props {
  text: string;
  href?: string;
  target?: string;
  images?: string[];
  duration?: number;
}

const ImageHoverText = ({ text, href, target, images, duration }: Props) => {
  const [visible, setVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [imageOffset, setImageOffset] = useState(0);
  const maxImageOffset = 48; // Must be smaller than the gap between words
  const containerRef = useRef<HTMLDivElement>(null);

  // Cycle through images
  useEffect(() => {
    if (images) {
      const interval = setInterval(() => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
      }, duration || 500);

      return () => clearInterval(interval);
    }
  }, [currentImage, images, duration]);

  const setImagePosition = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current?.getBoundingClientRect();

    if (container) {
      const mouseXWithinContainer = e.clientX - container.left;
      const newPosition = Math.min(
        maxImageOffset,
        Math.max(10, (mouseXWithinContainer / container.width) * maxImageOffset)
      );

      setImageOffset(newPosition);
    }
  };

  return (
    <ImageHoverTextContainer ref={containerRef}>
      <a href={href} target={target}>
        <p
          onMouseOver={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          onMouseMove={setImagePosition}
          data-content={text}
        >
          {text}
        </p>
      </a>
      {images && (
        <ImageContainer
          visible={visible}
          style={{ transform: `translateX(${imageOffset}px)` }}
        >
          <Image
            src={images[currentImage]}
            alt={`Hover image ${currentImage + 1}`}
            width={200}
            height={300}
            style={{
              objectFit: "cover",
              transform: `scale(${visible ? 1 : 0.9})`,
            }}
          />
        </ImageContainer>
      )}
    </ImageHoverTextContainer>
  );
};
export default ImageHoverText;
