import type { AppProps } from "next/app";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AppShell, Button, MantineProvider } from "@mantine/core";
import { defaultTheme } from "../utils/themes/default";
import { Navbar } from "../components/layout/nav.component";
import gsap from "gsap";

import "animate.css";
import "../styles/globals.css";
import { Footer } from "../components/layout/foot.component";

gsap.registerPlugin(ScrollTrigger);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={defaultTheme}>
      <Navbar />

      <Component {...pageProps} />

      <Footer />
    </MantineProvider>
  );
}
