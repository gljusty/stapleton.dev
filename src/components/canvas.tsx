import {
  ContactShadows,
  Environment,
  Float,
  MeshRefractionMaterial,
  MeshTransmissionMaterial,
  MeshWobbleMaterial,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
  Reflector,
  Select,
  Sky,
  Sparkles,
  Stars,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import Gem from "./gem";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import Laptop from "./laptop";

export default function MainCanvas() {
  return (
    <div id="canvas-wrapper">
      <Canvas shadows="soft">
        <PerspectiveCamera
          fov={30}
          far={1000}
          position={[0, 0, 10]}
          makeDefault
        />
        <Environment preset="sunset" blur={1.9} resolution={256} />
        <PresentationControls
          speed={0.5}
          azimuth={[-Math.PI / 2, Math.PI / 2]}
          snap
          polar={[-3, 3]}
        >
          <Laptop
            scale={[0.1, 0.1, 0.1]}
            rotation={[0, 0.5, 0]}
            position={[-2, -2, -2]}
            castShadow
            receiveShadow
          />
        </PresentationControls>

        <EffectComposer>
          <Bloom
            kernelSize={1}
            mipmapBlur
            levels={7}
            intensity={0.15}
            luminanceSmoothing={1}
            luminanceThreshold={0.25}
          />
        </EffectComposer>

        <Gem />

        <directionalLight
          position={[0.3, 3.0, 0.4]}
          intensity={0.284}
          castShadow
        />

        <directionalLight
          position={[1.3, 1.0, 4.4]}
          intensity={0.25}
          castShadow
        />

        <pointLight intensity={1.2} position={[10, 10, -10]} />
      </Canvas>
    </div>
  );
}
