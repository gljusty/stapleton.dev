import { Center } from "@mantine/core";
import useScrollPosition from "../../hooks/use-scroll-position";
import { TbBrandGithub } from "react-icons/tb";

export function Footer() {
  const scrollPos = useScrollPosition();
  return (
    <footer
      className={
        scrollPos > 1000 ? "animate__animated animate__fadeIn foot" : "foot"
      }
    >
      <Center>
        <TbBrandGithub size={32} color="red" />
        <TbBrandGithub size={48} color="red" />
      </Center>
    </footer>
  );
}
