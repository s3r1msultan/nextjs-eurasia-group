import React from "react";
import styles from "./Sidebar.module.scss";
import useOnClickOutside from "@/app/hooks/useOnClickOutside";
import Link from "next/link";

import ArrowTopRightIcon from "@/app/icons/ArrowTopRightIcon";
import FacebookIcon from "@/app/icons/FacebookIcon";
import InstagramIcon from "@/app/icons/InstagramIcon";
import YoutubeIcon from "@/app/icons/YoutubeIcon";
import ContactButton from "../ContactButton/ContactButton";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin", "cyrillic"] });

interface SidebarProps {
  isOpen: boolean;
  showSidebar: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, showSidebar }) => {
  const sidebarRef = useOnClickOutside({
    onClickOutside: () => {
      if (isOpen) {
        showSidebar(false);
      }
    },
  });

  return (
    <>
      <nav className={`${styles.nav} ${inter.className} ${isOpen ? styles.open : ""}`} ref={sidebarRef}>
        <button
          onClick={() => {
            showSidebar(false);
          }}
          className={styles.close_button}
        >
          <div className={styles.close_button_wrapper}>
            <div className={styles.close_line}></div>
            <div className={styles.close_line}></div>
          </div>
        </button>
        <ul className={styles.nav_links} onClick={() => showSidebar(false)}>
          <Link href={"/"}>
            <li>О компании</li>
          </Link>
          <Link href={"/mission"}>
            <li>Наша миссия</li>
          </Link>
          <Link href={"/news"}>
            <li>Что нового</li>
          </Link>
        </ul>
        <ContactButton className={styles.contact_us} onClick={() => showSidebar(false)} />
        <div className={styles.credits}>
          <div className={styles.social_links}>
            <Link className={styles.social_link + " " + styles.facebook} href="">
              <FacebookIcon className={styles.icon} />
            </Link>
            <Link className={styles.social_link} href="">
              <InstagramIcon className={styles.icon + " " + styles.instagram} />
            </Link>
            <Link className={styles.social_link} href="">
              <YoutubeIcon className={styles.icon + " " + styles.youtube} />
            </Link>
          </div>

          <div className={styles.copyright}>© Eurasia Group 2022</div>
        </div>
      </nav>
      <div className={`${styles.overlay} ${isOpen ? styles.visible : ""}`}></div>
    </>
  );
};

export default Sidebar;
