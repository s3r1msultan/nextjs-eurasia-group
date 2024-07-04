import Image from "next/image";
import styles from "./Header.module.scss";
import Wrapper from "../Wrapper/Wrapper";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Link from "next/link";
import logo from "/public/assets/images/logo.png";
import ArrowLeftIcon from "@/app/icons/ArrowLeftIcon";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
const inter = Inter({ subsets: ["latin", "cyrillic"] });

const Header = ({ is_contact_us }: { is_contact_us: boolean }) => {
  const [isOpen, showSidebar] = useState(false);
  const router = useRouter();
  const t = useTranslations();

  const toggleLocale = () => {
    const nextLocale = router.locale === "en" ? "ru" : "en";
    router.push(router.pathname, router.asPath, { locale: nextLocale });
  };
  return (
    <>
      <header className={`${styles.header} ${inter.className}  ${is_contact_us ? styles.is_contact_us : ""}`}>
        <Wrapper>
          <div className={`${styles.header_content} + " " + ${is_contact_us ? styles.left_part : ""}`}>
            <button className={styles.burger_button} onClick={() => showSidebar(true)}>
              <div className={styles.burger_line}></div>
              <div className={styles.burger_line}></div>
            </button>
            <Link href="/">
              <Image src={logo} priority alt="Eurasia Group Logo" className={styles.logo} />
            </Link>

            <div className={`${styles.locale_button} ${is_contact_us ? styles.left_part : ""}`} onClick={toggleLocale}>
              {router.locale === "en" ? "EN" : "RU"}
            </div>
          </div>
        </Wrapper>
        {is_contact_us && (
          <Wrapper>
            <div className={styles.right_part}>
              <Link href="/" className={styles.back_to_home}>
                <ArrowLeftIcon /> {t("backToHome")}
              </Link>
              <div className={styles.locale_button} onClick={toggleLocale}>
                {router.locale === "en" ? "EN" : "RU"}
              </div>
            </div>
          </Wrapper>
        )}
      </header>
      <Sidebar isOpen={isOpen} showSidebar={(isOpen: boolean) => showSidebar(isOpen)} />
    </>
  );
};

export default Header;
