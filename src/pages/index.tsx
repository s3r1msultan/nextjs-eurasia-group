import Head from "next/head";
import IntroSection from "./Home/IntroSection";
import InfoSection from "./Home/InfoSection";
import SolutionsSection from "./Home/SolutionsSection";
import Layout from "./Layout";

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
			<IntroSection />
			<InfoSection />
			<SolutionsSection />
		</>
	);
}
