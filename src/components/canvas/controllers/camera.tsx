import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";

export default function CameraController() {
  const { camera, mouse } = useThree();
  const vec = new Vector3();
  return useFrame(() =>
    camera.position.lerp(
      vec.set(mouse.x / 6, mouse.y / 12, camera.position.z),
      0.02
    )
  );
}
