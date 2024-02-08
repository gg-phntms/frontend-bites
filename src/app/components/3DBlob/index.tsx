"use client";

import { useFrame } from "@react-three/fiber";
import { Color, Mesh } from "three";
import { useRef } from "react";

const Blob = () => {
  const blobRef = useRef<Mesh>(null);

  // Shapes
  const vertexShader = `
    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `;

  // Colors
  const fragmentShader = `
    uniform vec3 color1;
    uniform vec3 color2;
    
    varying vec2 vUv;
    
    void main() {
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
    }
  `;

  const uniforms = {
    color1: {
      value: new Color("blue"),
    },
    color2: {
      value: new Color("white"),
    },
  };

  useFrame(({ clock }) => {
    if (blobRef.current) {
      blobRef.current.rotation.x = 0.5 * clock.getElapsedTime();
      blobRef.current.scale.x = Math.cos(clock.getElapsedTime());
    }
  });

  return (
    <mesh ref={blobRef}>
      <boxGeometry args={[3, 3, 3]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default Blob;
