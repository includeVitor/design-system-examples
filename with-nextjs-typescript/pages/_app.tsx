import type { AppProps } from "next/app";
import {
  CustomThemeProvider,
  ToastProvider,
} from "react-martins-component-library";
import { theme } from "../lib/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider theme={theme}>
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
    </CustomThemeProvider>
  );
}

export default MyApp;
