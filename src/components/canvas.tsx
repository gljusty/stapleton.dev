import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
  Outline,
  Select,
  DotScreen,
  Depth,
} from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";
import Gem from "./gem";
import { OrthographicCamera, Preload, Stats } from "@react-three/drei";
import Glass from "./glass";

export default function MainCanvas() {
  return (
    <div id="canvas-wrapper">
      <Canvas shadows>
        {/* <OrthographicCamera makeDefault position={[0, 0, 0]} far={1} /> */}
        <color attach="background" args={[0.01, 0.01, 0.01]} />

        <EffectComposer>
          <Select enabled>
            <Gem />
            <Glass />
          </Select>
          <Bloom luminanceSmoothing={0.05} luminanceThreshold={0} />
          <DepthOfField blur={4} />
        </EffectComposer>
        <Stats />
        <Preload all />
      </Canvas>
    </div>
  );
}
