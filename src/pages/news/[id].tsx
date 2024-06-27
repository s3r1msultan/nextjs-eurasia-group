// pages/news/[id].tsx
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { INews } from "@/app/constants/interfaces";
import { getWhatsNewRecordById } from "@/app/services/NewsService";
import styles from "./News.module.scss";
import Image from "next/image";
import Wrapper from "@/app/components/Wrapper/Wrapper";

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
				<button
					className={styles.back_butotn}
					onClick={() => window.history.back()}>
					Назад
				</button>
				<div className={styles.news_header}>
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
	console.log(id);
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

export default NewsDetailPage;
