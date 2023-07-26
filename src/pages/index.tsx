import { Container } from "@mantine/core";
import MainCanvas from "../components/canvas/canvas";

export default function HomePage() {
  return (
    <>
      <MainCanvas />
      <Container h={"400vh"} className="content-container">
        <div
          style={{
            position: "absolute",
            zIndex: 100,
            top: "275vh",
            left: "50vw",
            color: "white",
            fontSize: "32px",
          }}
        >
          Let's make something worth making
        </div>
      </Container>
    </>
  );
}
