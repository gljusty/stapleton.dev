import { useEffect } from "react";
import MainCanvas from "../components/canvas";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function HomePage() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".test-class",
      onEnter: () => {
        console.log("yuh");
      },
      onLeave: () => {
        console.log("bruh");
      },
      once: true,
    });
  }, []);
  return (
    <>
      <MainCanvas />
      <div style={{ height: "200vh" }} />
      <div
        className="test-class"
        style={{
          position: "absolute",
          top: "100%",
          left: 0,
          width: 500,
          height: 50,
          backgroundColor: "whitesmoke",
        }}
      />
    </>
  );
}
