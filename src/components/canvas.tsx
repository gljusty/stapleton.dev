import {
  PerspectiveCamera,
  PresentationControls,
  Stats,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Blob from "./blob";
import Lights from "./lights";
import Phone from "./phone";
import Laptop from "./laptop";

export default function MainCanvas() {
  return (
    <div id="canvas-wrapper">
      <Canvas>
        <PerspectiveCamera
          fov={30}
          far={80}
          position={[0, 0, 10]}
          makeDefault
        />
        <Lights />
        <color attach="background" args={[0.01, 0.01, 0.01]} />

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
