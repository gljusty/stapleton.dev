import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  Trail,
} from "@react-three/drei";
import { clamp } from "three/src/math/MathUtils";
import useScrollPosition from "../hooks/use-scroll-position";

export default function Blob() {
  const ref = useRef(null!);
  const scrollPos = useScrollPosition();
  const factor = clamp(scrollPos * 0.005, 0, 4);
  const scalar = factor * 0.33;

  useFrame((_, delta) => {
    return ref.current && (ref.current.rotation.z += delta * 0.125);
  });

  return (
    <group
      dispose={null}
      position={[0 + scalar + factor, 0 - scalar, -20 - factor]}
      rotation={[0.75 + scalar, 0 + factor, -Math.PI / 2]}
    >
      <Trail attenuation={(t) => t * t} length={10}>
        <Float speed={0.4} floatIntensity={1.4} floatingRange={[-0.21, 0.21]}>
          <mesh
            position={[0, 0, 0]}
            receiveShadow
            castShadow
            ref={ref}
            scale={[1 - scalar, 1 - scalar, 1 - scalar]}
          >
            <icosahedronGeometry args={[2.5, 48]} />
            <MeshDistortMaterial
              color={[
                0.1 + scrollPos / 800,
                0.1 + scrollPos / 1200,
                0.21 + scrollPos / 400,
              ]}
              distort={0.69}
              wireframe
            />
          </mesh>
          {Array(3 + Math.floor(factor))
            .fill(0)
            .map((_, idx) => (
              <mesh
                rotation={[2 * scalar, Math.PI + idx * scalar, 0.25 * idx]}
                key={idx}
                position={[0, 0, 0]}
              >
                <torusGeometry
                  args={[3.65 ** scalar, 0.006125, 128, 128, 1 - scalar]}
                />
                <MeshWobbleMaterial
                  color={[Math.random() ** idx, 0, Math.random() * idx]}
                  factor={6 + idx}
                  speed={0.65}
                  alphaTest={0.5}
                  depthWrite={false}
                />
              </mesh>
            ))}
        </Float>
      </Trail>
    </group>
  );
}
