import { Button } from "@mantine/core";
import { useStore } from "../utils/store";

export default function Nav() {
  const { toggleOpen } = useStore();
  return (
    <>
      <Button
        size="xl"
        style={{ position: "fixed", top: "200px", left: "50%" }}
        onClick={toggleOpen}
      />
    </>
  );
}
