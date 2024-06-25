import React from "react";
import styles from "./Home.module.scss";
import Wrapper from "@/app/components/Wrapper/Wrapper";
import Image from "next/image";
import intro_img from "../../public/assets/images/main_intro.png";
import ArrowTopRightIcon from "@/app/icons/ArrowTopRightIcon";
import Link from "next/link";
import ContactButton from "@/app/components/ContactButton/ContactButton";

const IntroSection = () => {
  return (
    <section className="intro">
      <Wrapper>
        <div className="intro_content">
          <h1 className="intro_title">
            <span>Eurasia</span> <span>Group</span>
          </h1>
          <p className="intro_subtitle">
            Сегодня мы — единственная компания на казахстанском сельскохозяйственном рынке, которая уже более 20-ти лет
            с гордостью представляет лучшую технику от мировых лидеров, таких как:
          </p>
          <ul className={styles.intro_list}>
            <li>John Deere (США)</li>
            <li>Lindsay Irrigation (США)</li>
            <li>JCB (Великобритания)</li>
            <li>Grimme (Германия)</li>
            <li>Väderstad (Швеция)</li>
          </ul>
          <ContactButton className={styles.contact_us} />
        </div>
        <div className="intro_image">
          <Image src={intro_img} alt="intro" />
        </div>
      </Wrapper>
    </section>
  );
};

export default IntroSection;
