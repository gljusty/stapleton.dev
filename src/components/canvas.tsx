import {
  EffectComposer,
  DepthOfField,
  Select,
  Bloom,
} from "@react-three/postprocessing";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Gem from "./gem";
import { Preload } from "@react-three/drei";
import useScrollPosition from "../hooks/use-scroll-position";
import Glass from "./glass";

export default function MainCanvas() {
  const scrollPosition = useScrollPosition();

  return (
    <div id="canvas-wrapper">
      <Canvas>
        <PerspectiveCamera makeDefault>
          <directionalLight
            castShadow
            position={[0, 10, 0]}
            shadow-camera-right={8}
            shadow-camera-top={8}
            shadow-camera-left={-8}
            shadow-camera-bottom={-8}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            intensity={1}
            shadow-bias={-0.0001}
          />
          <directionalLight
            castShadow
            position={[20, 10, 0]}
            shadow-camera-right={8}
            shadow-camera-top={8}
            shadow-camera-left={-8}
            shadow-camera-bottom={-8}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            intensity={1}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
        <EffectComposer>
          <DepthOfField blur={4} focusDistance={0.01} height={20} width={20} />
        </EffectComposer>
        <Gem />

        <Environment preset="apartment" />
        <ambientLight intensity={1.25} />

        <Preload all />
      </Canvas>
    </div>
  );
}
