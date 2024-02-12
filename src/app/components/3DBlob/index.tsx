"use client";

import { useFrame } from "@react-three/fiber";
import { Mesh, Vector3 } from "three";
import { useMemo, useRef } from "react";
import { createNoise4D } from "simplex-noise";

interface Props {
  frequency?: number;
  speed: number;
  amplitude: number;
}

const Blob = ({ frequency, speed, amplitude }: Props) => {
  const blobRef = useRef<Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const spikes = frequency || 0;
  const noise4D = createNoise4D();

  // Geometry
  const vertexShader = `
    uniform float u_intensity;
    uniform float u_time;
    uniform float u_speed;
    
    varying vec2 vUv;
    varying float vDisplacement;
    
    void main() {
      vUv = uv;
      vec3 newPosition = position + normal * vec3(u_intensity * sin(position.x * 3.0 + u_time * u_speed));
      vDisplacement = sin(position.x * 1.0 + u_time);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `;

  // Colors
  const fragmentShader = `
    uniform float u_intensity;
    uniform float u_time;
    uniform float u_speed;
    
    varying vec2 vUv;
    varying float vDisplacement;
    
    void main() {
      float distort = 1.0 * vDisplacement * u_intensity * sin(vUv.y * 1.0 + u_time );
      vec3 color = vec3(1, abs(vUv.x - 0.5) * 2.0 * (1.0 - distort), abs(vUv.y - 0.5) * 2.0 * (1.0 - distort));
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.1 },
      u_speed: { value: 1 },
    };
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value = time;
      materialRef.current.uniforms.u_speed.value = speed;
    }

    if (blobRef.current) {
      const vertices = blobRef.current.geometry.attributes.position;
      blobRef.current.rotation.x += 0.001 * speed;
      blobRef.current.rotation.z += 0.001 * speed;

      const updatedVertices = Array.from({ length: vertices.count }, (_, i) => {
        const vertex = new Vector3(
          vertices.getX(i),
          vertices.getY(i),
          vertices.getZ(i)
        );

        vertex
          .normalize()
          .multiplyScalar(
            1.5 +
              amplitude *
                (0.5 +
                  Math.sin(time) *
                    noise4D(
                      vertex.x * spikes,
                      vertex.y * spikes,
                      vertex.z * spikes + time * 0.00001,
                      4
                    ))
          );

        return [vertex.x, vertex.y, vertex.z];
      }).flat();

      // Set the updated vertices back to the geometry
      vertices.array.set(updatedVertices.flat());
      vertices.needsUpdate = true;
    }
  });

  return (
    <mesh ref={blobRef}>
      <icosahedronGeometry args={[2, 32]} />
      <shaderMaterial
        ref={materialRef}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default Blob;
