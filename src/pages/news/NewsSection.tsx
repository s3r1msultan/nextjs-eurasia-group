import React, { useEffect, useState } from "react";
import styles from "./News.module.scss";
import { getNewsById, getNewsList } from "@/app/services/NewsService";
import NewsCard from "@/app/components/NewsCard/NewsCard";

const NewsSection = () => {
  const [newsList, setNewsList] = useState([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchNewsList = async () => {
      try {
        const data = await getNewsList();
        setNewsList(data.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchNewsList();
  }, []);
  return (
    <div className={styles.news_grid}>
      {newsList.map((news: { id: number; title: string; image: string; description: string; created_at: string }) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  );
};

export default NewsSection;
