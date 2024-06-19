import React from "react";
import styles from "./Sidebar.module.scss";
import useOnClickOutside from "@/app/hooks/useOnClickOutside";
import Link from "next/link";
import { inter } from "@/pages/layout";
import { ArrowTopRight } from "@/app/icons/ArrowTopRight";
import Image from "next/image";

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
			<nav
				className={`${styles.nav} ${inter.className} ${
					isOpen ? styles.open : ""
				}`}
				ref={sidebarRef}>
				<button
					onClick={() => {
						showSidebar(false);
					}}
					className={styles.close_button}>
					<div className={styles.close_button_wrapper}>
						<div className={styles.close_line}></div>
						<div className={styles.close_line}></div>
					</div>
				</button>
				<ul className={styles.nav_links}>
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
				<button className={styles.contact_us}>
					<span>Связаться с нами</span> <ArrowTopRight />
				</button>
				<div className={styles.credits}>
					<ul className="social_links">
						<li>
							<a target="_blank" href="#">
								<Image
									width={0}
									height={0}
									src="/assets/images/facebook-filled.png"
									alt="Facebook icon"
									sizes="100vh"
								/>
							</a>
						</li>
						<li>
							<a target="_blank" href="#">
								<Image
									width={0}
									height={0}
									src="/assets/images/instagram-filled.png"
									alt="Instagram icon"
									sizes="100vh"
								/>
							</a>
						</li>
						<li>
							<a target="_blank" href="#">
								<Image
									width={0}
									height={0}
									src="/assets/images/youtube-filled.png"
									alt="Youtube icon"
									sizes="100vh"
								/>
							</a>
						</li>
					</ul>

					<div className={styles.copyright}>© Eurasia Group 2022</div>
				</div>
			</nav>
			<div
				className={`${styles.overlay} ${isOpen ? styles.visible : ""}`}></div>
		</>
	);
};

export default Sidebar;
