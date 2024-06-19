import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./Footer.module.scss";
import Image from "next/image";
import { inter } from "@/pages/layout";

const Footer = () => {
	return (
		<footer className={inter.className}>
			<Wrapper>
				<div className={styles.footer_content}>
					<div className={styles.copyright}>© Eurasia Group 2022</div>
					<div className="social_links">
						<Image
							src="/assets/images/facebook.png"
							alt="Facebook icon"
							width={0}
							height={0}
							sizes="100vh"
						/>
						<Image
							src="/assets/images/instagram.png"
							alt="Instagram icon"
							width={0}
							height={0}
							sizes="100vh"
						/>
						<Image
							src="/assets/images/youtube.png"
							alt="Youtube icon"
							width={0}
							height={0}
							sizes="100vh"
						/>
					</div>
				</div>
			</Wrapper>
		</footer>
	);
};

export default Footer;
