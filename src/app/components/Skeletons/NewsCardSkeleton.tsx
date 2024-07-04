import styles from "./NewsCardSkeleton.module.scss";
export const NewsCardSkeleton = () => (
  <div className={styles.news_card_skeleton}>
    <div className={styles.skeleton + " " + styles.image}></div>
    <div className={styles.skeleton + " " + styles.title}></div>
    <div className={styles.skeleton + " " + styles.description}></div>
    <div className={styles.skeleton + " " + styles.date}></div>
  </div>
);
