import Image from "next/image";
import styles from "./Header.module.scss";
import Wrapper from "../Wrapper/Wrapper";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Link from "next/link";
import { inter } from "@/pages/Layout";
import logo from "/public/assets/images/logo.png";

const Header = () => {
	const [isOpen, showSidebar] = useState(false);
	return (
		<>
			<header className={`${styles.header} ${inter.className}`}>
				<Wrapper>
					<div className={styles.header_content}>
						<button
							className={styles.burger_button}
							onClick={() => showSidebar(true)}>
							<div className={styles.burger_line}></div>
							<div className={styles.burger_line}></div>
						</button>
						<Link href="/">
							<Image
								src={logo}
								priority
								alt="Eurasia Group Logo"
								className={styles.logo}
								sizes="100vh"
							/>
						</Link>

						<div className={styles.locale_button}>RU</div>
					</div>
				</Wrapper>
			</header>
			<Sidebar
				isOpen={isOpen}
				showSidebar={(isOpen: boolean) => showSidebar(isOpen)}
			/>
		</>
	);
};

export default Header;
