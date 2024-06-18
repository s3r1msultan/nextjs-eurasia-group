import Image from "next/image";
import styles from "./Header.module.scss";
import Wrapper from "../Wrapper/Wrapper";
import { inter } from "@/pages";

const Header = () => {
	return (
		<header className={inter.className}>
			<Wrapper>
				<div className={styles.header_content}>
					<button className={styles.burger_button}>
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
	);
};

export default Header;
