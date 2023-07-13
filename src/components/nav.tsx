import { Button } from "@mantine/core";
import { useStore } from "../utils/store";

export default function Nav() {
  const { toggleOpen } = useStore();
  return (
    <>
      <Button size="xl" onClick={toggleOpen} />
    </>
  );
}
