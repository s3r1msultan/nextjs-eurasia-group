import React from "react";
import Image from "next/image";
import styles from "./NewsCard.module.scss";
import { INews } from "@/app/constants/interfaces";

const extractFirstParagraph = (html: string): string => {
	const parser = new DOMParser();
	const doc = parser.parseFromString(html, "text/html");
	const firstParagraph = doc.querySelector("p");
	return firstParagraph ? firstParagraph.innerText : "";
};

const NewsCard = ({ news }: { news: INews }) => {
	const firstParagraph = extractFirstParagraph(news.description);
	return (
		<div className={styles.news_card}>
			<Image
				src={news.image}
				alt={news.title}
				width={300}
				height={200}
				layout="responsive"
			/>
			<h2 className={styles.title}>{news.title}</h2>
			<div className={styles.description}>{firstParagraph}</div>
			<span className={styles.date}>{news.created_at}</span>
		</div>
	);
};

export default NewsCard;
