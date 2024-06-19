import React from "react";
import styles from "./Sidebar.module.scss";
import useOnClickOutside from "@/app/hooks/useOnClickOutside";
import Link from "next/link";
import { inter } from "@/pages";

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
        <ul className={styles.links}>
          <li>
            <Link href={"/"}>О компании</Link>
          </li>
          <li>
            <Link href={"/our_mission"}>Наша миссия</Link>
          </li>
          <li>
            <Link href={"/news"}>Что нового</Link>
          </li>
        </ul>
        <button className={styles.contact_us}></button>
        <div className={styles.credits}></div>
      </nav>
      <div className={`${styles.overlay} ${isOpen ? styles.visible : ""}`}></div>
    </>
  );
};

export default Sidebar;
