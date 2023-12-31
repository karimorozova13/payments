import "@/styles/globals.css";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Payments API</title>
        <meta name="description" content="Generated by me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div>
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}
