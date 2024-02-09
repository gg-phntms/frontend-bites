"use client";

import Blob from "@/app/components/3DBlob";
import Header from "@/app/components/Header";
import { PageContainer, Column, Anchor } from "@/app/styles/styles";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ChangeEvent, useState } from "react";

export default function Page() {
  const [freq, setFreq] = useState(0);
  const [speed, setSpeed] = useState(2);
  const [amp, setAmp] = useState(0.2);

  const handleFreqChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFreq(Number(event.target.value));
  };

  const handleSpeedChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSpeed(Number(event.target.value));
  };

  const handleAmpChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmp(Number(event.target.value));
  };

  return (
    <PageContainer>
      <Header text="3D blob" />
      <Column style={{ height: "640px" }}>
        <p>
          Source:{" "}
          <Anchor
            href="https://docs.pmnd.rs/react-three-fiber/"
            target="_blank"
          >
            Pmndrs
          </Anchor>
          ,{" "}
          <Anchor
            href="https://codepen.io/hrahimi270/pen/yLOeWxm?editors=0010/"
            target="_blank"
          >
            hrahimi270
          </Anchor>
          ,{" "}
          <Anchor
            href="https://blog.chetanverma.com/how-to-create-an-awesome-blob-with-react-three-fiber"
            target="_blank"
          >
            Chetan Verma
          </Anchor>
        </p>

        <form>
          <label>
            Complexity
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={freq}
              onChange={handleFreqChange}
            />
            {freq}
          </label>
          <br />
          <label>
            Speed
            <input
              type="range"
              min="0"
              max="10"
              step="1"
              value={speed}
              onChange={handleSpeedChange}
            />
            {speed}
          </label>
          <br />
          <label>
            Amplitude
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={amp}
              onChange={handleAmpChange}
            />
            {amp}
          </label>
        </form>

        {/* Blob */}
        <Canvas>
          <ambientLight intensity={0.3} />
          <directionalLight color="white" position={[-5, 5, 5]} />
          <OrbitControls enablePan={false} rotateSpeed={0.5} />
          <Blob frequency={freq} speed={speed} amplitude={amp} />
        </Canvas>
      </Column>
    </PageContainer>
  );
}
