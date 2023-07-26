import { useRef, useLayoutEffect } from "react";
import { MeshDistortMaterial } from "@react-three/drei";
import useScrollPosition from "../../hooks/use-scroll-position";
import { Power1, gsap } from "gsap";
import { clamp } from "three/src/math/MathUtils";
import { useStore } from "../../utils/store";

export default function Blob() {
  const ref = useRef(null!),
    groupRef = useRef(null!);
  const scrollPos = useScrollPosition();
  const { open, toggleOpen } = useStore();

  const factor = clamp(scrollPos * 0.0025, 0, 4);
  const scalar = 0.01 + scrollPos / 8000;
  const lastTop = pageYOffset || document.body.scrollTop;
  useLayoutEffect(() => {
    const safelyToggleOpen = () => {
      let currentTop = window.pageYOffset || document.body.scrollTop;
      if (currentTop > lastTop) {
        !open && toggleOpen();
      } else if (currentTop < lastTop) {
        toggleOpen();
      }
    };

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".content-container",
          start: "50% 50%",
          scrub: 1,
        },
        smoothChildTiming: true,
      });

      tl.add(
        gsap.to(groupRef.current.scale, {
          x: 0.5,
          y: 0.5,
          z: 0.5,
        })
      );

      tl.add(
        gsap.to(groupRef.current.position, {
          x: -5,
        })
      );

      tl.add(
        gsap.to(groupRef.current.position, {
          x: 5,
          duration: 2,
        })
      );

      tl.add(
        gsap.to(ref.current.scale, {
          x: 4,
          z: 4,
          y: 4,
          duration: 2,
          ease: Power1.easeInOut,
        }),
        "<"
      );

      tl.add(
        gsap.to(groupRef.current.scale, {
          x: 1,
          y: 1,
          z: 1,
        })
      );

      tl.call(safelyToggleOpen, this, 2);
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <group ref={groupRef} dispose={null} position={[5, 0, -10]}>
        <mesh position={[0, 0, 0]} receiveShadow castShadow>
          <icosahedronGeometry args={[2.5, 28]} />
          <MeshDistortMaterial
            color={[
              0.031 + scrollPos / 80,
              0.01 + scrollPos / 100,
              0.31 + scrollPos / 400,
            ]}
            distort={0.69}
          />
        </mesh>

        <mesh
          position={[0, 0, 0]}
          ref={ref}
          scale={[0.001, 0.001, 0.001]}
          rotation={[-0.25, -0.25, 0.25]}
        >
          <circleGeometry args={[48, 128, 128, 0.75]} />
          <MeshDistortMaterial distort={0.75} speed={0.65} color={[1, 1, 1]} />
        </mesh>
      </group>
    </>
  );
}
