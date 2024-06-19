import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import Layout from "./layout";
import IntroSection from "./Home/IntroSection";

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
			<Layout>
				<IntroSection />
			</Layout>
		</>
	);
}
