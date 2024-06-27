import React, { useEffect } from "react";
import styles from "./News.module.scss";
import { getWhatsNewRecords } from "@/app/services/NewsService";
import NewsCard from "@/app/components/NewsCard/NewsCard";
import { INews, category } from "@/app/constants/interfaces";
import { useNewsStore } from "@/app/stores/NewsStore";
import Link from "next/link";
const NewsSection = () => {
	const {
		newsList,
		category,
		pagination,
		error,
		setNewsList,
		setFilters,
		setPagination,
		setError,
	} = useNewsStore();

	useEffect(() => {
		const fetchNewsList = async () => {
			try {
				const data: { data: INews[] } = await getWhatsNewRecords();
				setNewsList(data.data);
				setPagination({
					currentPage: 1,
					totalPages: Math.ceil(data.data.length / 6),
				});
			} catch (error: any) {
				setError(error.message);
			}
		};

		fetchNewsList();
	}, [setNewsList, setPagination, setError]);

	const handleFilterChange = (category: category) => {
		setFilters(category);
	};

	const handlePageChange = (newPage: number) => {
		setPagination({ currentPage: newPage, totalPages: pagination.totalPages });
	};

	const filteredNewsList = newsList.filter((news: INews) => {
		return category ? news.record_category.name === category : true;
	});

	const paginatedNewsList = filteredNewsList.slice(
		(pagination.currentPage - 1) * 6,
		pagination.currentPage * 6,
	);

	return (
		<>
			<div className={styles.filters}>
				<button
					onClick={() => handleFilterChange("Partner News")}
					className={category === "Partner News" ? styles.active : ""}>
					Новости партнеров
				</button>
				<button
					onClick={() => handleFilterChange("News in agriculture")}
					className={category === "News in agriculture" ? styles.active : ""}>
					Новости в сельском хозяйстве
				</button>
			</div>
			<div className={styles.news_grid}>
				{paginatedNewsList.map((news: INews) => (
					<Link href={`/news/${news.id}`} key={news.id}>
						<NewsCard news={news} />
					</Link>
				))}
			</div>
			<div className={styles.pagination}>
				{Array.from({ length: pagination.totalPages }, (_, i) => (
					<button
						key={i}
						onClick={() => handlePageChange(i + 1)}
						disabled={i + 1 === pagination.currentPage}>
						{i + 1}
					</button>
				))}
			</div>
		</>
	);
};

export default NewsSection;
