import {
  Environment,
  Float,
  Lightformer,
  PerspectiveCamera,
  Stats,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Blob from "./blob";
import Laptop from "./laptop";
import Lights from "./lights";

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
        <Environment preset="sunset" blur={1} resolution={256} />
        <fog attach="fog" args={["slategrey", 15, 30]} />
        <color attach="background" args={[0.01, 0.01, 0.01]} />

        <Laptop />

        <Blob />

        <Lights />

        <Stats />
      </Canvas>
    </div>
  );
}
