import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { clamp } from "three/src/math/MathUtils";
import useScrollPosition from "../hooks/use-scroll-position";

export default function Blob() {
  const ref = useRef(null!);
  const scrollPos = useScrollPosition();
  const factor = clamp(scrollPos * 0.005, 0, 4);

  useFrame((_, delta) => {
    return ref.current && (ref.current.rotation.z += delta * 0.025);
  });

  return (
    <group
      dispose={null}
      position={[0, 0, -20 + factor]}
      rotation={[0.75 + scrollPos / 400, 0, -Math.PI / 2]}
    >
      <Float speed={0.4} floatIntensity={1.4} floatingRange={[-0.21, 0.21]}>
        <mesh position={[0, 0, 0]} receiveShadow castShadow ref={ref}>
          <icosahedronGeometry args={[2.5, 48]} />
          <MeshDistortMaterial
            color={[0.01 + scrollPos / 1000, 0.1, 0.3]}
            distort={0.69}
            wireframe
          />
        </mesh>
        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <mesh
              rotation={[2, Math.PI + idx, (0.25 * idx) / 4]}
              key={idx}
              dispose={null}
              position={[0, 0, 0]}
            >
              <torusGeometry
                args={[3.65 + factor / 3, 0.0125, 128, 128, 1 - factor / 6]}
              />
              <MeshWobbleMaterial
                color={[Math.random() ** idx, 0, 0.25 * idx]}
                factor={6 + idx}
                speed={0.65}
                alphaTest={0.5}
                depthWrite={false}
              />
            </mesh>
          ))}
      </Float>
    </group>
  );
}
