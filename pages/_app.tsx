import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";

require("../styles/antd-variables.less");

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Sparrow Starter</title>
      <meta name="description" content="Generated by create next app" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default MyApp;
