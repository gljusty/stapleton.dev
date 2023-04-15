import { Canvas } from "@react-three/fiber";

export default function MainCanvas() {
  return (
    <div id="canvas-wrapper">
      <Canvas>
        <color attach="background" args={[0, 0, 0]}></color>
      </Canvas>
    </div>
  );
}
