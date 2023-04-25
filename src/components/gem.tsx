import { useRef } from "react";
import { TextureLoader } from "three";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

export default function Gem() {
  const texture = useLoader(TextureLoader, "/neptune.jpg");
  const gemRef = useRef(null!);
  const { gl } = useThree();

  texture.anisotropy = gl.capabilities.getMaxAnisotropy();

  useFrame((_, delta) => {
    return (
      gemRef.current && (gemRef.current.rotation.z += delta * 0.00015 + 0.0001)
    );
  });

  return (
    <group dispose={null} position={[0, 0, -10]}>
      <Float speed={0.4} floatIntensity={1.4} floatingRange={[-0.21, 0.21]}>
        <mesh position={[2, 0, 0]} ref={gemRef} receiveShadow castShadow>
          <sphereGeometry args={[2.25, 128, 128, 128]} />
          <MeshDistortMaterial color={[0.01, 0.1, 0.3]} fog distort={0.49} />
        </mesh>
      </Float>
    </group>
  );
}
