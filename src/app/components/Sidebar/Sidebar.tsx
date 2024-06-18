import React, { useRef, useState } from "react";
import styles from "./Sidebar.module.scss";
import useOnClickOurside from "@/app/hooks/useClickOnOutside";
import Link from "next/link";
import { inter } from "@/pages";

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const sidebarRef = useRef(null);
	useOnClickOurside({
		ref: sidebarRef,
		onClickOutside: () => {
			setIsOpen(false);
		},
	});
	return (
		<>
			<nav className={styles.nav + " " + inter.className} ref={sidebarRef}>
				<button
					className={styles.close_button}
					onClick={() => {
						setIsOpen(false);
					}}>
					<div>
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
				<button className={styles.contact_us} />
				<div className={styles.credits}></div>
			</nav>
			<div className={styles.overlay}></div>
		</>
	);
};

export default Sidebar;
