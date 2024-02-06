"use client";

import { useEffect, useState } from "react";

interface Props {
  images: string[];
}

const ImageTrail = ({ images }: Props) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });
  const [positions, setPositions] = useState(
    Array(images.length).fill({ x: 0, y: 0 })
  );
  const [imageIndex, setImageIndex] = useState(0);
  const moveThreshold = 50;
  const fadeOutTime = 0.2;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });

      const distanceMoved = Math.sqrt(
        Math.pow(cursorPosition.x - prevPosition.x, 2) +
          Math.pow(cursorPosition.y - prevPosition.y, 2)
      );

      if (distanceMoved > moveThreshold) {
        // Create a new Image element
        const newImage = document.createElement("img");
        newImage.src = images[imageIndex];
        newImage.alt = `Trail image ${imageIndex}`;

        // Style the new Image element
        newImage.style.position = "absolute";
        newImage.style.top = `${e.clientY}px`;
        newImage.style.left = `${e.clientX}px`;
        newImage.style.transform = "translate(-50%, -50%)";
        newImage.style.height = "225px";
        newImage.style.width = "150px";
        newImage.style.objectFit = "cover";
        newImage.style.opacity = "1";
        newImage.style.transition = `${fadeOutTime}s`;

        newImage.className = "TrailImage";

        // Append the new Image element to the document body
        document.body.appendChild(newImage);

        setTimeout(() => {
          (newImage as HTMLImageElement).style.opacity = "0";
          (newImage as HTMLImageElement).style.transform =
            "translate(-50%, -50%) scale(0.7)";

          // Add a 0.2s timeout to remove the image from the DOM
          setTimeout(() => {
            if (newImage.parentNode) {
              newImage.parentNode.removeChild(newImage as HTMLImageElement);
            }
          }, fadeOutTime * 1000);
        }, 1000);

        const imagesOnScreen = document.querySelectorAll(".TrailImage");

        // If more than 5 images on screen, set opacity to 0 for the oldest images
        imagesOnScreen.forEach((image, index) => {
          if (index < imagesOnScreen.length - 5) {
            (image as HTMLImageElement).style.opacity = "0";

            // Add a 0.2s timeout to remove the image from the DOM
            setTimeout(() => {
              if (image.parentNode) {
                image.parentNode.removeChild(image as HTMLImageElement);
              }
            }, fadeOutTime * 1000);
          }
        });

        // Update states
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setPrevPosition({ x: e.clientX, y: e.clientY });
        const newPositions = positions.map((pos, i) =>
          i === imageIndex ? cursorPosition : pos
        );
        setPositions(newPositions);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorPosition, prevPosition, positions, images, imageIndex]);

  return null; // Return null since the images are dynamically created and appended to the body
};

export default ImageTrail;
