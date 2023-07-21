import {
  PerspectiveCamera,
  PresentationControls,
  Stats,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Blob from "./blob";
import Lights from "./lights";
import Phone from "./phone";
import Laptop from "./laptop/laptop.component";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  ChromaticAberration,
  Pixelation,
} from "@react-three/postprocessing";
import { BlendFunction, KernelSize } from "postprocessing";
import { Vector2 } from "three";
import { useRef } from "react";

export default function MainCanvas() {
  const sunRef = useRef(null!);
  return (
    <div id="canvas-wrapper">
      <Canvas>
        <PerspectiveCamera
          fov={30}
          far={80}
          position={[0, 0, 10]}
          makeDefault
        />

        <mesh ref={sunRef} position={[0, -10, 0]}>
          <circleGeometry args={[1, 4, 4, 4]} />
          <meshBasicMaterial color={[1, 1, 1]} depthWrite={false} />
        </mesh>

        <Lights />
        <color attach="background" args={[0.0, 0.0, 0.0]} />

        <EffectComposer multisampling={16} autoClear>
          <Bloom
            intensity={0.2}
            luminanceSmoothing={0.5}
            luminanceThreshold={0.25}
          />

          <ChromaticAberration
            blendFunction={BlendFunction.COLOR_BURN} // blend mode
            offset={new Vector2(0.01275, 0.002)} // color offset
          />

          <DepthOfField
            focusDistance={1.25}
            focalLength={4}
            bokehScale={2}
            height={480}
          />

          {/*  <GodRays
            sun={sunRef}
            blendFunction={BlendFunction.SCREEN} // The blend function of this effect.
            samples={60} // The number of samples per pixel.
            density={0.96} // The density of the light rays.
            decay={0.9} // An illumination decay factor.
            weight={0.4} // A light ray weight factor.
            exposure={0.6} // A constant attenuation coefficient.
            clampMax={1} // An upper bound for the saturation of the overall effect.
            kernelSize={KernelSize.SMALL} // The blur kernel size. Has no effect if blur is disabled.
            blur={1} // Whether the god rays should be blurred to reduce artifacts.
          /> */}
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
        <Stats />
      </Canvas>
    </div>
  );
}
