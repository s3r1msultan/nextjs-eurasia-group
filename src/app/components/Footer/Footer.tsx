import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./Footer.module.scss";
import Link from "next/link";
import FacebookIcon from "@/app/icons/FacebookIcon";
import InstagramIcon from "@/app/icons/InstagramIcon";
import YoutubeIcon from "@/app/icons/YoutubeIcon";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin", "cyrillic"] });

const Footer = ({ is_contact_us }: { is_contact_us: boolean }) => {
  return (
    <footer className={`${inter.className} ${styles.footer}`}>
      <Wrapper>
        <div className={`${styles.footer_content} ${is_contact_us ? styles.contact_us : ""} `}>
          <div className={styles.footer_copyright}>© Eurasia Group 2022</div>
          <div className={`${styles.footer_social_links} ${is_contact_us ? styles.right_part : ""}`}>
            <Link className={styles.footer_social_link} href="">
              <FacebookIcon className={styles.icon + " " + styles.facebook} />
            </Link>
            <Link className={styles.footer_social_link} href="">
              <InstagramIcon className={styles.icon + " " + styles.instagram} />
            </Link>
            <Link className={styles.footer_social_link} href="">
              <YoutubeIcon className={styles.icon + " " + styles.youtube} />
            </Link>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
