"use client";

import { useFrame } from "@react-three/fiber";
import { Mesh, Vector3 } from "three";
import { useMemo, useRef } from "react";
import { createNoise4D } from "simplex-noise";

const Blob = () => {
  const blobRef = useRef<Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const noise4D = createNoise4D();

  // Geometry
  const vertexShader = `
    uniform float u_intensity;
    uniform float u_time;
    
    varying vec2 vUv;
    varying float vDisplacement;
    
    void main() {
      vUv = uv;
      vec3 newPosition = position + normal * vec3(u_intensity * sin(position.y * 3.0 + u_time));
      vDisplacement = sin(position.y * 10.0 + u_time);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `;

  // Colors
  const fragmentShader = `
    uniform float u_intensity;
    uniform float u_time;
    
    varying vec2 vUv;
    varying float vDisplacement;
    
    void main() {
      float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
      vec3 color = vec3(abs(vUv - 0.5) * 2.0  * (1.0 - distort), 1.0);
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.2 },
    };
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() * 0.00001;
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value = clock.elapsedTime;
    }

    if (blobRef.current) {
      const vertices = blobRef.current.geometry.attributes.position;

      const updatedVertices = Array.from({ length: vertices.count }, (_, i) => {
        const vertex = new Vector3(
          vertices.getX(i),
          vertices.getY(i),
          vertices.getZ(i)
        );

        vertex
          .normalize()
          .multiplyScalar(
            1 + 0.3 * noise4D(vertex.x, vertex.y, vertex.z * time, 3)
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
      <sphereGeometry args={[2, 32, 32]} />
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
