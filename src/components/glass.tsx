import { MeshTransmissionMaterial } from "@react-three/drei";
import useScrollPosition from "../hooks/use-scroll-position";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Glass() {
  const scrollPosition = useScrollPosition();
  const ref = useRef(null!);
  useFrame((_, delta) => {
    if (!ref.current) {
      return;
    }
  });
  return (
    <group dispose={null}>
      <mesh
        position={[2, 0, -4]}
        rotation={[-Math.PI / 2 - 0.125, -Math.PI / 3 - 0.1, 1]}
      >
        <planeGeometry args={[1000, 1000, 1000]} />
        <MeshTransmissionMaterial
          color={[1, 1, 1]}
          emissiveIntensity={0}
          distortionScale={1}
          temporalDistortion={0.25}
          samples={16}
          resolution={512}
          anisotropy={0}
          thickness={0.275}
          roughness={0.275}
          toneMapped={true}
        />
      </mesh>
    </group>
  );
}
