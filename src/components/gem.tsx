import { useRef } from "react";
import { Mesh, TextureLoader } from "three";
import useScrollPosition from "../hooks/use-scroll-position";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  MeshRefractionMaterial,
  MeshTransmissionMaterial,
} from "@react-three/drei";

export default function Gem() {
  const texture = useLoader(TextureLoader, "/neptune.jpg");
  const scrollPosition = useScrollPosition();
  const gemRef = useRef(null!);
  const { scene, gl } = useThree();

  texture.anisotropy = gl.capabilities.getMaxAnisotropy();

  useFrame((_, delta) => {
    return (
      gemRef.current &&
      (gemRef.current.rotation.z += delta * scrollPosition * 0.00015 + 0.0001)
    );
  });

  return (
    <group dispose={null} position={[0, 0, -10]}>
      <Float speed={0.4} floatIntensity={1.4} floatingRange={[-0.21, 0.21]}>
        <mesh position={[2, 0, 0]} ref={gemRef} receiveShadow castShadow>
          <sphereGeometry args={[1.25 + scrollPosition / 5000, 4, 4, 4]} />
          <MeshDistortMaterial color={[0.01, 0.1, 0.3]} metalness={0.33} />
        </mesh>
      </Float>
    </group>
  );
}
