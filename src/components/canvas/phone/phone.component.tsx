/*
view Auto-generated by: https://github.com/pmndrs/gltfjsx
author: DatSketch (https://sketchfab.com/DatSketch)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/iphone-se-3-2022-concept-75f86bb680f74a74bad782fbd7e96302
title: iPhone SE 3 - 2022 Concept
*/

import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { PHONE_STATE, useStore } from "../../../utils/store";
import { Power1, gsap } from "gsap";

export default function Phone() {
  //@ts-ignore
  const { nodes, materials } = useGLTF("/iphone_se_3_-_2022_concept.glb");
  const ref = useRef(null!);

  const { open, phoneMode, updatePhoneMode } = useStore();

  useEffect(() => {
    gsap.to(ref.current.position, {
      y: open ? -3.5 : -20,
      duration: 2,
      ease: Power1.easeInOut,
    });
  }, [open]);

  return (
    <group
      position={[-3, -20, -10]}
      rotation={[1.25, 0.25, -0.325]}
      dispose={null}
      ref={ref}
      onClick={() => {
        const handleSuccess = () => {
          updatePhoneMode(PHONE_STATE.SPINNING);
          gsap.to(ref.current.rotation, {
            z: ref.current.rotation.z + Math.PI * 2,
            duration: 1,
            onComplete: () => {
              updatePhoneMode(PHONE_STATE.IDLE);
            },
          });
        };
        phoneMode === PHONE_STATE.IDLE && handleSuccess();
      }}
    >
      <group rotation={[Math.PI, 0, Math.PI]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["IP_SE_3_-_2022_Camera_GRAY_0"].geometry}
              material={materials.Camera_GRAY}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["IP_SE_3_-_2022_Camera_RED_0"].geometry}
              material={materials.Camera_RED}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["IP_SE_3_-_2022_Bezel_BLACK_0"].geometry}
              material={materials.Bezel_BLACK}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["IP_SE_3_-_2022_Body_RED_0"].geometry}
              material={materials.Body_RED}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["IP_SE_3_-_2022_Body_0"].geometry}
              material={materials.Body}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["IP_SE_3_-_2022_Apple_Logo_0"].geometry}
              material={materials.Apple_Logo}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["IP_SE_3_-_2022_Sensor_0"].geometry}
              material={materials.Sensor}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["IP_SE_3_-_2022_Camera_BLACK_0"].geometry}
              material={materials.Camera_BLACK}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["IP_SE_3_-_2022_Camera_GLASS_0"].geometry}
              material={materials.Camera_GLASS}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["IP_SE_3_-_2022_Frame_RED_0"].geometry}
              material={materials.Frame_RED}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["IP_SE_3_-_2022_Camera_GLOSS__0"].geometry}
              material={materials.Camera_GLOSS}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["IP_SE_3_-_2022_GRAY_0"].geometry}
              material={materials.GRAY}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["IP_SE_3_-_2022_BLACK_0"].geometry}
              material={materials.BLACK}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["IP_SE_3_-_2022_Antennas_0"].geometry}
              material={materials.Antennas}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["IP_SE_3_-_2022_Flash_0"].geometry}
              material={materials.Flash}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["IP_SE_3_-_2022_MicSpeaker_0"].geometry}
              material={materials.MicSpeaker}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["IP_SE_3_-_2022_Camera_LENS_0"].geometry}
              material={materials.Camera_LENS}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["IP_SE_3_-_2022_Wallpaper_0"].geometry}
            >
              <meshStandardMaterial color={[0, 0, 0]} />
              {/* <Html
                transform
                occlude
                className="phone-content-wrapper"
                rotation={[Math.PI / 2, -Math.PI, 0]}
                position={[0.035, 0.185, 1.79]}
              >
                <div style={{ fontSize: "20px" }}>test 2345</div>
              </Html> */}
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/iphone_se_3_-_2022_concept.glb");
