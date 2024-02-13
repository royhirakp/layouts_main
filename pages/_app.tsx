import FirstPage from "@/components/layout1/firstPage/FirstPage";
import "@/styles/globals.css";
import "@/styles/animation.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import {
  Inter,
  Roboto,
  Agbalumo,
  Lato,
  Caveat,
  Amatic_SC,
} from "@next/font/google";
// import "./testStyle.css";

const inir = Lato({
  subsets: ["latin"],
  weight: ["400"],
});
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>templates</title>
        <meta name="templates" content="My templates" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Protest+Revolution&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <div
      // className={inir.className}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
