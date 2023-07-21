import { Group, Title } from "@mantine/core";
import useScrollPosition from "../../hooks/use-scroll-position";
import { useStore } from "../../utils/store";

export function Navbar() {
  const scrollPos = useScrollPosition();
  const { toggleOpen } = useStore();

  return (
    <nav className={scrollPos === 0 ? "navbar" : "navbar fade"}>
      <Group position="apart" p="xl">
        <h1 style={{ color: "black" }}>Bryan Stapleton</h1>

        <div className="nav-link-container">
          <a href="/" target="_blank" className="nav-link">
            About
          </a>
          <a href="/" target="_blank" className="nav-link">
            Projects & Past Work
          </a>
          <a onClick={toggleOpen} className="nav-link">
            Contact
          </a>
        </div>
      </Group>
    </nav>
  );
}
