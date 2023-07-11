import { Button } from "@mantine/core";
import { useStore } from "../../utils/store";
import { LAPTOP_STATE } from "../../utils/store";

export default function LaptopContent() {
  const { laptopMode, updateLaptopMode } = useStore();

  return (
    <>
      <Button
        onClick={() => {
          updateLaptopMode(LAPTOP_STATE.CONTACT);
        }}
      />
      <Button
        onClick={() => {
          updateLaptopMode(LAPTOP_STATE.IDLE);
        }}
      />
      {laptopMode === "IDLE" ? (
        <div style={{ height: "200vh" }}>test 345</div>
      ) : (
        "test 23435"
      )}
    </>
  );
}
