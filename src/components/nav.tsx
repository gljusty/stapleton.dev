import { useStore } from "../utils/store";

export default function Nav() {
  const { toggleOpen } = useStore();
  return (
    <>
      <button
        style={{
          position: "fixed",
          left: 250,
          zIndex: 1,
          top: 25,
          width: 200,
          height: 50,
        }}
        onClick={toggleOpen}
      />
    </>
  );
}
