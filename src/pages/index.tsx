import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/app/components/Header/Header";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Euraisa Group</title>
        <meta
          name="description"
          content="Сегодня мы — единственная компания на казахстанском сельскохозяйственном рынке, которая уже более 20-ти лет с гордостью представляет лучшую технику от мировых лидеров."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`${inter.className}`}></main>
    </>
  );
}
