import "../styles/globals.css";
import "../styles/loader.css";
import "../styles/swiper.css";
import type { AppProps } from "next/app";

// Gets the theme context to wrap the whole application. See /Contexts/themeContext.tsx from more information
import ThemeContextProvider from "../Contexts/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}
