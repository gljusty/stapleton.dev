import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { gsap } from "gsap";
import { useStore } from "../utils/store";
import useScrollPosition from "../hooks/use-scroll-position";

export default function Blob() {
  const ref = useRef(null!);

  useFrame((_, delta) => {
    return ref.current && (ref.current.rotation.z += delta * 0.025);
  });

  return (
    <group dispose={null} position={[0, 0, -20]} rotation={[0, 0, 0]}>
      <Float speed={2.4} floatIntensity={1.4} floatingRange={[-0.21, 0.21]}>
        <mesh position={[0, 0, 0]} receiveShadow castShadow ref={ref}>
          <icosahedronGeometry args={[2.5, 48]} />
          <MeshDistortMaterial color={[0.01, 0.1, 0.3]} distort={0.69} />
        </mesh>
        {Array(7)
          .fill(0)
          .map((_, idx) => (
            <mesh rotation={[1 + idx, Math.PI / idx + 1, 0.25]} key={idx}>
              <torusGeometry args={[4.65, 0.0012625, 256, 256, 2.27]} />
              <MeshWobbleMaterial
                color={[0.65 ** idx, 0, Math.random() * idx]}
                factor={2}
                speed={0.75}
                alphaTest={0.5}
                depthWrite={false}
                wireframe
              />
            </mesh>
          ))}
      </Float>
    </group>
  );
}
