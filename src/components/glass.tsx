import {
  MeshDistortMaterial,
  MeshTransmissionMaterial,
} from "@react-three/drei";
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
    <group dispose={null} rotation={[0.5, 0, 0]}>
      <mesh position={[2, 0, -4]}>
        <torusGeometry args={[3, 2, 2]} />
        <MeshDistortMaterial
          color={[0.25, 0.25, 0.25]}
          distort={0.25}
          speed={1.2}
        />
      </mesh>
    </group>
  );
}
