import type { AppProps } from "next/app";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MantineProvider } from "@mantine/core";
import { defaultTheme } from "../utils/themes/default";
import gsap from "gsap";

import "../styles/globals.css";

gsap.registerPlugin(ScrollTrigger);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
