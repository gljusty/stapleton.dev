import {
  Cloud,
  PerspectiveCamera,
  Preload,
  PresentationControls,
  Stars,
  Stats,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Blob from "./blob";
import Lights from "./lights";
import Phone from "./phone/phone.component";
import Laptop from "./laptop/laptop.component";
import {
  Bloom,
  DepthOfField,
  TiltShift,
  EffectComposer,
  ChromaticAberration,
  Select,
  Scanline,
  Selection,
  ShockWave,
  Grid,
  Noise,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Color, Vector2 } from "three";
import { Perf } from "r3f-perf";

import { Suspense, useRef } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { useStore } from "../../utils/store";
import CameraController from "./controllers/camera";

export default function MainCanvas() {
  const isDesktop = useMediaQuery("(min-width: 900px)");
  const { open } = useStore();

  return (
    <Suspense fallback={null}>
      <div id="canvas-wrapper">
        <Canvas shadows="soft">
          <PerspectiveCamera
            fov={30}
            far={80}
            position={[0, 0, 10]}
            makeDefault
          />
          <CameraController />

          <Lights />
          <color attach="background" args={[0.0, 0.0, 0.0]} />
          <EffectComposer
            multisampling={16}
            autoClear
            enabled={isDesktop && !open}
            disableNormalPass
            depthBuffer
          >
            <Grid
              blendFunction={BlendFunction.OVERLAY} // blend mode
              scale={0.5} // grid pattern scale
              lineWidth={10.0} // grid pattern line width
            />
            <ChromaticAberration
              blendFunction={BlendFunction.COLOR_BURN}
              offset={new Vector2(0.009275, 0.002)}
            />
          </EffectComposer>

          <Blob />
          <Phone />

          <PresentationControls
            azimuth={[-0.25, 0.25]}
            polar={[-0.25, 0.25]}
            snap
          >
            <Laptop />
          </PresentationControls>

          <Preload all />
          <Perf position="bottom-left" />
        </Canvas>
      </div>
    </Suspense>
  );
}
