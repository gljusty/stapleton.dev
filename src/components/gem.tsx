import { useRef } from "react";
import useScrollPosition from "../hooks/use-scroll-position";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  Mesh,
  TextureLoader,
  AdditiveBlending,
  Group,
  NormalBlending,
} from "three";
import {
  MeshRefractionMaterial,
  MeshTransmissionMaterial,
} from "@react-three/drei";

export default function Gems() {
  const { gl } = useThree();

  const opalTexture = useLoader(TextureLoader, "./opal_texture.jpg");
  const neptuneTexture = useLoader(TextureLoader, "./neptune.jpg");
  const mercuryTexture = useLoader(TextureLoader, "./mercury-texture.jpg");

  [neptuneTexture, opalTexture, mercuryTexture].map(
    (x) => (x.anisotropy = gl.capabilities.getMaxAnisotropy())
  );

  const scrollPosition = useScrollPosition();
  const gemRef = useRef<Mesh>(null!),
    groupRef = useRef<Group>(null!);

  useFrame((state, delta) => {
    if (!gemRef.current || !groupRef.current) {
      return;
    }
    gemRef.current.rotation.y -= delta * scrollPosition * 0.00015 + 0.005;
  });
  return (
    <group
      ref={groupRef}
      position={[0, -5, -110]}
      rotation={[0.125, Math.PI / 2, 1]}
      scale={[1, 1, 1]}
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
            12 - scrollPosition / 200,
            6 - scrollPosition / 200,
            32 - scrollPosition / 200,
            64 - scrollPosition / 200,
          ]}
        />
        <MeshRefractionMaterial
          envMap={neptuneTexture}
          aberrationStrength={1}
          bounces={scrollPosition < 500 ? 4 : 0}
          blending={NormalBlending}
          fastChroma
          wireframe={scrollPosition > 500}
        />
      </mesh>
      <mesh
        position={[0, -scrollPosition / 20, 0]}
        rotation={[-Math.PI / 3, Math.PI / 3, 2]}
      >
        <planeGeometry args={[1000 - scrollPosition, 1000, 1000]} />
        <MeshTransmissionMaterial
          emissiveIntensity={0}
          emissive={[0.125, 0, 0.125]}
          distortionScale={1}
          temporalDistortion={0.25}
          samples={16}
          resolution={512}
          anisotropy={1}
          thickness={0.75}
          roughness={0.35}
          toneMapped={true}
        />
      </mesh>
      <pointLight
        position={[-2, 10, 0]}
        intensity={0.5}
        color={[0, 0, 0.125]}
      />
    </group>
  );
}
