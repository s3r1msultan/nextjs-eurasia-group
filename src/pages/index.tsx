import Head from "next/head";
import IntroSection from "./IntroSection";
import DigitsSection from "./DigitsSection";
import SolutionsSection from "./SolutionsSection";

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
			<DigitsSection />
			<SolutionsSection />
		</>
	);
}

export async function getStaticProps(context: { locale: any }) {
	return {
		props: {
			messages: (await import(`/public/locales/${context.locale}.json`))
				.default,
		},
	};
}
