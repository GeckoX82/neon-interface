import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Neon Interface</title>
        <meta name="description" content="Neon Interface Public" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.neonBody}>
          <h1 className={styles.myh1} contentEditable spellCheck="false">
            neon_interface
          </h1>
        </div>
      </main>
    </>
  );
}
