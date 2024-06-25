import React from "react";
import styles from "./News.module.scss";
import Wrapper from "@/app/components/Wrapper/Wrapper";

const NewsPage = () => {
  return (
    <section className={styles.news}>
      <Wrapper>
        <h1 className="section_title">Что нового</h1>
        <p className="section_subtitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown
        </p>
      </Wrapper>
    </section>
  );
};

export default NewsPage;
