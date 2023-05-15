import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Blob from "./blob";
import Laptop from "./laptop";
import Lights from "./lights";
import Phone from "./phone";

export default function MainCanvas() {
  return (
    <div id="canvas-wrapper">
      <Canvas shadows="soft">
        <PerspectiveCamera
          fov={30}
          far={80}
          position={[0, 0, 10]}
          makeDefault
        />

        <Lights />
        <Environment preset="sunset" blur={1} resolution={256} />
        <color attach="background" args={[0.01, 0.01, 0.01]} />

        <Laptop />
        <PresentationControls snap>
          <Phone />
        </PresentationControls>

        <Blob />
      </Canvas>
    </div>
  );
}
