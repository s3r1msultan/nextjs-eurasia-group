import React from "react";
import styles from "./News.module.scss";
import Wrapper from "@/app/components/Wrapper/Wrapper";
import NewsSection from "./NewsSection";
import { useTranslations } from "next-intl";

const NewsPage = () => {
	const t = useTranslations("whatsNew");
	return (
		<>
			<Wrapper>
				<section className={styles.news}>
					<h1 className={"section_title" + " " + styles.section_title}>
						{t("title")}
					</h1>
					<p className={"section_subtitle" + " " + styles.section_subtitle}>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown
					</p>
					<NewsSection />
				</section>
			</Wrapper>
		</>
	);
};

export async function getStaticProps(context: { locale: any }) {
	return {
		props: {
			messages: (await import(`/public/locales/${context.locale}.json`))
				.default,
		},
	};
}

export default NewsPage;
