import Image from "next/image";
import React from "react";
import styles from "../styles/NewsCard.module.css";

const NewsCard = ({
  image_url,
  title,
  desription,
  date,
}: {
  image_url: string;
  title: string;
  desription: string;
  date: string;
}) => {
  return (
    <div className={styles.news_card}>
      <Image src={image_url} alt={title} width={0} height={0} sizes="100vw" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{desription}</p>
      <span className={styles.date}>{date}</span>
    </div>
  );
};

export default NewsCard;
