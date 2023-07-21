import { Button } from "@mantine/core";
import { useStore } from "../../utils/store";
import { LAPTOP_STATE } from "../../utils/store";
import { useCallback } from "react";

export default function LaptopContent() {
  const { laptopMode, updateLaptopMode } = useStore();

  const handleRender = useCallback(() => {
    switch (laptopMode) {
      case LAPTOP_STATE.IDLE:
        return <>IDLE</>;

      case LAPTOP_STATE.CONTACT:
        return <>CONTACT</>;

      case LAPTOP_STATE.DEMOS:
        return <>DEMOS</>;

      default:
        return <>DEFAULT</>;
    }
  }, [laptopMode]);

  return (
    <>
      <Button
        onClick={() => {
          updateLaptopMode(LAPTOP_STATE.CONTACT);
        }}
      >
        test
      </Button>
      <Button
        onClick={() => {
          updateLaptopMode(LAPTOP_STATE.IDLE);
        }}
      >
        test23
      </Button>
      {handleRender()}
    </>
  );
}
