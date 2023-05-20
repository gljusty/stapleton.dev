import MainCanvas from "../components/canvas";
import Nav from "../components/nav";

export default function HomePage() {
  return (
    <>
      <Nav />
      <MainCanvas />
      <div style={{ height: "200vh" }} />
    </>
  );
}
