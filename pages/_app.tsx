import "../styles/globals.css";
import "../styles/loader.css";
import "../styles/swiper.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import ThemeContextProvider from "../Contexts/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
      <Analytics />
    </ThemeContextProvider>
  );
}
