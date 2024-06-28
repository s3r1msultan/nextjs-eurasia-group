import React from "react";
import styles from "./Home.module.scss";
import Wrapper from "@/app/components/Wrapper/Wrapper";

const SolutionsSections = () => {
  return (
    <section className={styles.solutions}>
      <Wrapper>
        <div className={styles.solutions_content}>
          <h2 className={styles.solutions_title + " section_title"}>Уникальные решения</h2>
          <p className={styles.solutions_subtitle + " section_subtitle"}>
            За эти годы мы создали развитую сеть по обеспечению фермеров уникальными комплексными решениями в сельском
            хозяйстве Казахстана и Кыргызстана
          </p>
          <div className={styles.solutions_flexbox}>
            <div className={styles.solutions_flexbox_column}>
              <div className={styles.solutions_flexbox_item}>
                <h3 className={styles.solutions_flexbox_item_title}>3,6</h3>
                <p className={styles.solutions_flexbox_item_subtitle}>
                  млн. га засеваются решениями для посева John Deere
                </p>
              </div>
              <div className={styles.solutions_flexbox_item}>
                <h3 className={styles.solutions_flexbox_item_title}>2,5</h3>
                <p className={styles.solutions_flexbox_item_subtitle}>млн. га оцифровано решениями John Deere</p>
              </div>
            </div>
            <div className={styles.solutions_flexbox_column}>
              <div className={styles.solutions_flexbox_item}>
                <h3 className={styles.solutions_flexbox_item_title}>6.5</h3>
                <p className={styles.solutions_flexbox_item_subtitle}>
                  млн. га убираются решениями для уборки John Deere
                </p>
              </div>

              <div className={styles.solutions_flexbox_item}>
                <h3 className={styles.solutions_flexbox_item_title}>16,3</h3>
                <p className={styles.solutions_flexbox_item_subtitle}>тысячи га орошается решениями для полива</p>
              </div>
            </div>
          </div>
          <div className={styles.solutions_flexbox_item}>
            <h3 className={styles.solutions_flexbox_item_title}>{">"}2K</h3>
            <p className={styles.solutions_flexbox_item_subtitle}>фермеров зарабытывают с нашими решениями</p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SolutionsSections;
