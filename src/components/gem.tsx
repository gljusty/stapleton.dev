import { useRef } from "react";
import useScrollPosition from "../hooks/use-scroll-position";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  Mesh,
  TextureLoader,
  Group,
  NormalBlending,
  AdditiveBlending,
} from "three";
import {
  MeshRefractionMaterial,
  MeshTransmissionMaterial,
} from "@react-three/drei";

export default function Gem() {
  const { gl } = useThree();
  const texture = useLoader(TextureLoader, "./neptune.jpg");

  texture.anisotropy = gl.capabilities.getMaxAnisotropy();

  const scrollPosition = useScrollPosition();
  const gemRef = useRef<Mesh>(null!),
    groupRef = useRef<Group>(null!);

  useFrame((_, delta) => {
    return (
      gemRef.current &&
      (gemRef.current.rotation.y -= delta * scrollPosition * 0.00015 + 0.005)
    );
  });
  return (
    <group
      ref={groupRef}
      position={[0, 0, -110]}
      rotation={[0.125, Math.PI / 2, 1]}
      dispose={null}
    >
      <mesh
        ref={gemRef}
        receiveShadow
        castShadow
        scale={[1.25, 0.75, 1.25]}
        rotation={[0, 0, 0]}
      >
        <sphereGeometry
          args={[
            Math.max(20 - scrollPosition / 10, 2),
            6 - scrollPosition / 200,
            16 - scrollPosition / 200,
            128 - scrollPosition / 200,
          ]}
        />
        <MeshRefractionMaterial
          envMap={texture}
          aberrationStrength={0.01}
          bounces={2}
          blending={AdditiveBlending}
          fresnel={0.1}
        />
      </mesh>
    </group>
  );
}
