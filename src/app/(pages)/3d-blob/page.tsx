"use client";

import Blob from "@/app/components/3DBlob";
import Header from "@/app/components/Header";
import { PageContainer, Column, Anchor } from "@/app/styles/styles";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Page() {
  return (
    <PageContainer>
      <Header text="3D blob" />
      <Column>
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
        </p>

        {/* Blob */}
        <Canvas>
          <ambientLight intensity={1} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            rotateSpeed={0.5}
          />
          <Blob />
        </Canvas>
      </Column>
    </PageContainer>
  );
}
