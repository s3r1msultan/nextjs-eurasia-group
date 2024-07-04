// pages/news/[id].tsx
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { INews } from "@/app/constants/interfaces";
import { getWhatsNewRecordById } from "@/app/services/NewsService";
import styles from "./News.module.scss";
import Image from "next/image";
import Wrapper from "@/app/components/Wrapper/Wrapper";
import ArrowLeftIcon from "@/app/icons/ArrowLeftIcon";
import { getTranslations } from "next-intl/server";

interface IProps {
	news: INews;
}

interface IParams extends ParsedUrlQuery {
	id: string;
}

const NewsDetailPage = ({ news }: IProps) => {
	return (
		<Wrapper>
			<div className={styles.news_detail}>
				<div className={styles.news_header}>
					<button
						className={styles.back_button}
						onClick={() => window.history.back()}>
						<span className={styles.icon_wrapper}>
							<ArrowLeftIcon />
						</span>
					</button>
					<span className={styles.news_date}>{news.created_at}</span>

					<h1 className={"section_title" + " " + styles.news_title}>
						{news.title}
					</h1>
				</div>
				<Image
					src={news.image}
					alt={news.title}
					width={960}
					height={560}
					className={styles.news_image}
				/>
				<div
					className={styles.news_content}
					dangerouslySetInnerHTML={{ __html: news.description }}
				/>
			</div>
		</Wrapper>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.params as IParams;

	try {
		const response = await getWhatsNewRecordById(Number(id));
		return {
			props: {
				news: response.data,
			},
		};
	} catch (error) {
		console.log(error);
		return {
			notFound: true,
		};
	}
};

export async function getStaticProps(context: { locale: any }) {
	return {
		props: {
			messages: (await import(`/public/locales/${context.locale}.json`))
				.default,
		},
	};
}

export default NewsDetailPage;
