import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Cloud, Float, MeshDistortMaterial, Stars } from "@react-three/drei";

export default function Blob() {
  const ref = useRef(null!);

  useFrame((_, delta) => {
    return ref.current && (ref.current.rotation.z += delta * 0.01);
  });

  return (
    <group dispose={null} position={[0, 0, -10]}>
      <Float speed={0.4} floatIntensity={1.4} floatingRange={[-0.21, 0.21]}>
        <mesh position={[2, 0, 0]} ref={ref} receiveShadow castShadow>
          <icosahedronGeometry args={[2.25, 128]} />
          <MeshDistortMaterial color={[0.01, 0.1, 0.3]} fog distort={0.479} />
        </mesh>
      </Float>
    </group>
  );
}
