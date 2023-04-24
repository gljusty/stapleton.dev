import gsap from "gsap";
import { PerspectiveCamera } from "three";
import { MutableRefObject, useEffect, useState } from "react";

interface ScrollEffectProps {
  target: MutableRefObject<PerspectiveCamera>;
}

export default function useCameraScroll({
  target,
}: ScrollEffectProps): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] {
  const [active, toggleActive] = useState<boolean>(true);
  const moveCamera = () => {
    const top = document.body.getBoundingClientRect().top;
    target.current &&
      (active
        ? gsap.to(target.current.position, {
            duration: 2,
            y: top * 0.05,
          })
        : null);
  };

  useEffect(() => {
    window.addEventListener("scroll", moveCamera, false);
    return () => {
      window.removeEventListener("scroll", moveCamera, false);
    };
  }, [active]);

  return [active, toggleActive];
}
