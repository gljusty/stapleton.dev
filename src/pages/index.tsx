import { Container } from "@mantine/core";
import MainCanvas from "../components/canvas";
import Nav from "../components/nav";

export default function HomePage() {
  return (
    <>
      <MainCanvas />
      <Container h={"300vh"}>
        <Nav />
      </Container>
    </>
  );
}
