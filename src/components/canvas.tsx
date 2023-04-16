import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
  Outline,
  Select,
} from "@react-three/postprocessing";

import { Canvas } from "@react-three/fiber";
import { Cloud, OrthographicCamera } from "@react-three/drei";
import ScrollingText from "./text";
import Gem from "./gem";

export default function MainCanvas() {
  return (
    <div id="canvas-wrapper">
      <Canvas shadows>
        <color attach="background" args={[0, 0, 0]} />

        <EffectComposer>
          <Select enabled>
            <Gem />
          </Select>
          <Bloom luminanceSmoothing={0.05} luminanceThreshold={0} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
