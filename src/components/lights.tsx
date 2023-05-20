export default function Lights() {
  return (
    <>
      <directionalLight
        position={[0.3, 3.0, 0.4]}
        intensity={0.284}
        castShadow
      />

      <directionalLight
        position={[1.3, 1.0, 4.4]}
        intensity={0.25}
        castShadow
      />

      <directionalLight
        position={[2.3, 2.0, 0.4]}
        intensity={0.65}
        castShadow
      />
    </>
  );
}
