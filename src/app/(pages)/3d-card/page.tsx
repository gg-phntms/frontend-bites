"use client";

import Header from "@/app/components/Header";
import { PageContainer } from "@/app/styles/styles";
import Image from "next/image";
import { CardContainer, Card, Shimmer } from "./styles";
import { useRef, useState } from "react";

export default function Page() {
  const cardRef = useRef<HTMLDivElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const xAxis = (window.innerWidth / 2 - e.pageX) / -20;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 20;
      cardRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
    if (shimmerRef.current) {
      const xAxis = (window.innerWidth / 2 - e.pageX) / -5;
      shimmerRef.current.style.transform = `translateX(${xAxis}px)`;
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
        </Card>
      </CardContainer>
    </PageContainer>
  );
}
