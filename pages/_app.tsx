import FirstPage from "@/components/layout1/firstPage/FirstPage";
import "@/styles/globals.css";
import "@/styles/animation.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import "./testStyle.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>templates</title>
        <meta name="templates" content="My templates" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
