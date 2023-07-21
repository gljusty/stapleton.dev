import { Container } from "@mantine/core";
import MainCanvas from "../components/canvas";

export default function HomePage() {
  return (
    <>
      <MainCanvas />
      <Container h={"200vh"}></Container>
    </>
  );
}
