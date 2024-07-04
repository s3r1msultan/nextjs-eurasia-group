import React, { useContext, useEffect } from "react";
import styles from "./News.module.scss";
import { getWhatsNewRecords } from "@/app/services/NewsService";
import NewsCard from "@/app/components/NewsCard/NewsCard";
import { INews, category } from "@/app/constants/interfaces";
import { useNewsStore } from "@/app/stores/NewsStore";
import Link from "next/link";
import { NewsCardSkeleton } from "@/app/components/Skeletons/NewsCardSkeleton";
import { useLoading } from "@/app/contexts/LoadingContext";
import { useTranslations } from "next-intl";
import ArrowLeftIcon from "@/app/icons/ArrowLeftIcon";

const NewsSection = () => {
  const { newsList, category, pagination, error, setNewsList, setFilters, setPagination, setError } = useNewsStore();

  const { isLoading, setIsLoading } = useLoading();
  const t = useTranslations("whatsNew.newsSection");

  const skeletons = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    const fetchNewsList = async () => {
      try {
        setIsLoading(true);

        const data: { data: INews[] } = await getWhatsNewRecords();
        setNewsList(data.data);
        setPagination({
          currentPage: 1,
          totalPages: Math.ceil(data.data.length / 6),
        });
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
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

  const paginatedNewsList = filteredNewsList.slice((pagination.currentPage - 1) * 6, pagination.currentPage * 6);

  return (
    <>
      <div className={styles.filters}>
        <button
          onClick={() => handleFilterChange("Partner News")}
          className={category === "Partner News" ? styles.active : ""}
        >
          {t("partnersNews")}
        </button>
        <button
          onClick={() => handleFilterChange("News in agriculture")}
          className={category === "News in agriculture" ? styles.active : ""}
        >
          {t("agriculturalNews")}
        </button>
      </div>
      <div className={styles.news_grid}>
        {!isLoading
          ? paginatedNewsList.map((news: INews) => (
              <Link href={`/news/${news.id}`} key={news.id}>
                <NewsCard news={news} />
              </Link>
            ))
          : skeletons.map((skeleton) => <NewsCardSkeleton key={skeleton} />)}
      </div>
      <div className={styles.pagination}>
        <button onClick={() => handlePageChange(1)} disabled={pagination.currentPage === 1}>
          <ArrowLeftIcon />
        </button>
        {Array.from({ length: pagination.totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            disabled={i + 1 === pagination.currentPage}
            className={i + 1 === pagination.currentPage ? styles.active : ""}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(pagination.totalPages)}
          disabled={pagination.currentPage === pagination.totalPages}
        >
          <ArrowLeftIcon />
        </button>
      </div>
    </>
  );
};

export default NewsSection;
