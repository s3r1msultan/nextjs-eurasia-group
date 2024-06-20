import React from "react";
import styles from "./HomeStyle.module.scss";
import Wrapper from "@/app/components/Wrapper/Wrapper";
import Image from "next/image";

const IntroSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.intro_wrapper}>
        <Wrapper>
          <div className={styles.intro_content}>
            <h1 className={styles.intro_title}>
              <span>Eurasia</span> Group
            </h1>
            <p className={styles.intro_subtitle}>
              Сегодня мы — единственная компания на казахстанском сельскохозяйственном рынке, которая уже более 20-ти
              лет с гордостью представляет лучшую технику от мировых лидеров, таких как:
            </p>
            <ul className={styles.intro_list}>
              <li>John Deere (США)</li>
              <li>Lindsay Irrigation (США)</li>
              <li>JCB (Великобритания)</li>
              <li>Grimme (Германия)</li>
              <li>Väderstad (Швеция)</li>
            </ul>
            <button className={styles.contact_us}>Связаться с нами</button>
          </div>
        </Wrapper>
        <div className={styles.intro_image}>
          <Image
            src="/assets/images/main_intro.png"
            alt="intro"
            sizes="100vw"
            width={0}
            height={0}
            style={{ objectPosition: "left", objectFit: "cover", width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
