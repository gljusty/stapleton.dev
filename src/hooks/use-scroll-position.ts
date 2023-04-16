import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollPos, setScrollPos] = useState<number>(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPos;
};

export default useScrollPosition;
