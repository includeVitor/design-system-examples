import type { AppProps } from "next/app";
import {
  CustomThemeProvider,
  ToastProvider,
} from "react-martins-component-library";
import { ThemeProvider } from "styled-components";
import { theme } from "../lib/theme";
import { GlobalStyles } from "../styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CustomThemeProvider theme={theme}>
        <GlobalStyles />
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      </CustomThemeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
