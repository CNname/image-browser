import type { AppProps } from "next/app";

import Layout from "../components/layout";

import "../styles/globals.css";
import "../styles/variables.css";

function ImageBrowser({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default ImageBrowser;
