import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./Footer.module.scss";
import { inter } from "@/pages/Layout";
import Link from "next/link";
import FacebookIcon from "@/app/icons/FacebookIcon";
import InstagramIcon from "@/app/icons/InstagramIcon";
import YoutubeIcon from "@/app/icons/YoutubeIcon";

const Footer = () => {
	return (
		<footer className={`${inter.className} ${styles.footer}`}>
			<Wrapper>
				<div className={styles.footer_content}>
					<div className={styles.footer_copyright}>© Eurasia Group 2022</div>
					<div className={styles.footer_social_links}>
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
