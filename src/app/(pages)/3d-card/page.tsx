"use client";

import Header from "@/app/components/Header";
import { PageContainer } from "@/app/styles/styles";
import Image from "next/image";
import { CardContainer, Card, Shimmer, Glare } from "./styles";
import { useRef } from "react";

export default function Page() {
  const cardRef = useRef<HTMLDivElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const xAxis = (window.innerWidth / 2 - e.pageX) / -20;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 20;
      cardRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
    if (shimmerRef.current) {
      const xAxis = ((window.innerWidth - e.pageX) / window.innerWidth) * 100;
      shimmerRef.current.style.background = `linear-gradient(
        to bottom right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) ${xAxis - 10}%,
        rgba(255, 255, 255, 1) ${xAxis + 10}%,
        rgba(255, 255, 255, 0) 100%
      ),
      url("/images/foil.png") center center / 100% 100%`;
    }
    if (glareRef.current) {
      const gradientX = (e.clientX / window.innerWidth) * 100;
      const gradientY = (e.clientY / window.innerHeight) * 100;
      const gradient = `radial-gradient(farthest-corner circle at ${gradientX}% ${gradientY}%, #fff 0%, #fff0 50%)`;
      glareRef.current.style.background = gradient;
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "rotateY(0deg)";
    }
  };

  return (
    <PageContainer center>
      <Header text="3D card" />

      <CardContainer
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Card ref={cardRef}>
          <Image
            src="/images/blue-eyes-white-dragon.jpg"
            alt="Blue Eyes White Dragon Yu-Gi-Oh card"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Shimmer ref={shimmerRef} />
          <Glare ref={glareRef} />
        </Card>
      </CardContainer>
    </PageContainer>
  );
}
