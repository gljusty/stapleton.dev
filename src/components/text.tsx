import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { Center, Text3D, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

import mechanismoFont from "../fonts/Mechanismo_Regular.json";
import useScrollPosition from "../hooks/use-scroll-position";

export default function ScrollingText() {
  const fontRef = useRef(null);
  const font = new FontLoader().parse(mechanismoFont);
  const scrollPosition = useScrollPosition();
  const { clock } = useThree();
  useFrame((_, delta) => {
    if (!fontRef.current) {
      return;
    }
  });

  return (
    <Center position={[0, 8, -10]} rotation={[1, 0, Math.PI / 2]}>
      <Text3D
        ref={fontRef}
        font={font.data}
        scale={1}
        letterSpacing={-0.5}
        height={Math.min(4, scrollPosition / 100 + 0.1)}
        bevelSize={12.5}
        bevelSegments={112}
        curveSegments={128}
        bevelThickness={1.325}
        rotation={[0, 0, 0]}
      >
        Bryan Stapleton
        <MeshTransmissionMaterial
          emissiveIntensity={0.25}
          emissive={[0.125, 0, 0.125]}
          distortionScale={1}
          temporalDistortion={0.25}
          samples={64}
          resolution={512}
          anisotropy={1}
          thickness={0.75}
          roughness={0.35}
          toneMapped={true}
        />
      </Text3D>
    </Center>
  );
}
