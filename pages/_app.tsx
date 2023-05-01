import "../styles/globals.css";
import "../styles/loader.css";
import "../styles/swiper.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import ThemeContextProvider from "../Contexts/ThemeContext";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      themes={["light", "dark"]}
      enableSystem={false}
    >
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
