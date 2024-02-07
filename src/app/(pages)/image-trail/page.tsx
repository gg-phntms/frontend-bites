"use client";

import Header from "@/app/components/Header";
import ImageTrail from "@/app/components/ImageTrail";
import { PageContainer, Column, Anchor, Button } from "@/app/styles/styles";
import { useState } from "react";

export default function Page() {
  const [city, setCity] = useState(["rome", "png"]);
  return (
    <PageContainer>
      <Header text="Image trail" />
      <Column>
        <div>
          {/* Lord forgive me. This whole component is busted */}
          <Button onClick={() => setCity(["london", "jpg"])}>London</Button>
          <Button onClick={() => setCity(["paris", "jpg"])}>Paris</Button>
          <Button onClick={() => setCity(["tokyo", "jpg"])}>Tokyo</Button>
          <Button onClick={() => setCity(["newyork", "png"])}>New York</Button>
          <Button onClick={() => setCity(["rome", "png"])}>Rome</Button>
          <Button onClick={() => setCity(["sydney", "png"])}>Sydney</Button>
        </div>
        <p>
          Source:{" "}
          <Anchor href="https://hopeisreal.co/home/" target="_blank">
            https://hopeisreal.co/home/
          </Anchor>
        </p>
      </Column>
      <ImageTrail
        images={[
          `/images/cities/${city[0]}-1.${city[1]}`,
          `/images/cities/${city[0]}-2.${city[1]}`,
          `/images/cities/${city[0]}-3.${city[1]}`,
          `/images/cities/${city[0]}-4.${city[1]}`,
          `/images/cities/${city[0]}-5.${city[1]}`,
        ]}
      />
    </PageContainer>
  );
}
