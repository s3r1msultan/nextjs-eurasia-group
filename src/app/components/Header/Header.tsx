import Image from "next/image";
import styles from "./Header.module.scss";
import Wrapper from "../Wrapper/Wrapper";
import { inter } from "@/pages";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const [isOpen, showSidebar] = useState(false);
  return (
    <>
      <header className={`${styles.header} ${inter.className}`}>
        <Wrapper>
          <div className={styles.header_content}>
            <button className={styles.burger_button} onClick={() => showSidebar(true)}>
              <div className={styles.burger_line}></div>
              <div className={styles.burger_line}></div>
            </button>
            <Image
              src="/assets/images/logo.png"
              alt="Eurasia Group Logo"
              width={0}
              height={0}
              className={styles.logo}
              sizes="100vw"
            />
            <div className={styles.locale_button}>RU</div>
          </div>
        </Wrapper>
      </header>
      <Sidebar isOpen={isOpen} showSidebar={(isOpen: boolean) => showSidebar(isOpen)} />
    </>
  );
};

export default Header;
