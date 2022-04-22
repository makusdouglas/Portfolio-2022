import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { appTheme } from "../theme";
import { HeaderFeature } from "../src/features/Header";
import "@fontsource/montserrat";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={appTheme}>
      <HeaderFeature />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
