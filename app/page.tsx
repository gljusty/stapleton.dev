import { Inter } from "next/font/google";

const inter = Inter<"--inter-font">({
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

export default function Home() {
  const waitForInter = async () => {
    await console.log(inter.variable);
  };
  waitForInter();

  return (
    <div style={{ font: inter.variable }}>
      <div>test Test 123</div>
    </div>
  );
}
