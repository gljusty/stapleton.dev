import * as THREE from "three";
import React, { useState, ReactNode } from "react";
import {
  useFrame,
  createPortal,
  MeshProps,
  useThree,
} from "@react-three/fiber";
import { useFBO } from "@react-three/drei";

export default function Mirror({
  children,
  props,
}: {
  children?: ReactNode;
  props?: MeshProps;
}) {
  const { camera } = useThree();
  const fbo = useFBO();
  const [scene] = useState(() => new THREE.Scene());

  useFrame((state) => {
    camera.matrixWorldInverse.copy(state.camera.matrixWorldInverse);
    state.gl.setRenderTarget(fbo);
    state.gl.render(scene, camera);
    state.gl.setRenderTarget(null);
  });
  return (
    <>
      <mesh {...props}>
        <torusGeometry args={[2, 0.4]} />
        <meshBasicMaterial map={fbo.texture} />
      </mesh>

      {createPortal(children, scene)}
    </>
  );
}
