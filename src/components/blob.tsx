import { useRef, useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  MeshTransmissionMaterial,
  MeshWobbleMaterial,
  Trail,
} from "@react-three/drei";
import { clamp } from "three/src/math/MathUtils";
import useScrollPosition from "../hooks/use-scroll-position";
import { useStore } from "../utils/store";
import { gsap } from "gsap";

export default function Blob() {
  const ref = useRef(null!),
    groupRef = useRef(null!);
  const { toggleOpen } = useStore();
  const scrollPos = useScrollPosition();
  const factor = clamp(scrollPos * 0.005, 0, 4);
  const scalar = factor * 0.33;

  useFrame((_, delta) => {
    return ref.current && (ref.current.rotation.z += delta * 0.125);
  });

  return (
    <group
      ref={groupRef}
      dispose={null}
      position={[0, 0, -10]}
      rotation={[0.75 + scalar, 0 - factor, -Math.PI - factor]}
    >
      <Float speed={0.4} floatIntensity={1.4} floatingRange={[-0.21, 0.21]}>
        {factor === 4 && (
          <mesh
            position={[-0.125, 0, 0]}
            rotation={[0.75 + scalar, 0 + factor, -Math.PI + 1.2 * factor]}
            receiveShadow
            castShadow
            onClick={toggleOpen}
          >
            <circleGeometry args={[20, 128, 128, 0.67 - scrollPos / 4000]} />
            <MeshDistortMaterial distort={1.075} color={[1, 1, 1]} />
          </mesh>
        )}
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
        {factor > 1 &&
          factor < 3 &&
          Array(7)
            .fill(0)
            .map((_, idx) => (
              <mesh key={idx} position={[0, 0, 0]} rotation={[0, 0, 0]}>
                <sphereGeometry args={[3.65, 48, 256, 164, 1]} />
                <MeshWobbleMaterial
                  color={[0.05, 0, 1]}
                  factor={6}
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
