import ArrowTopRightIcon from "@/app/icons/ArrowTopRightIcon";
import Link from "next/link";
import React from "react";
import styles from "./ContactButton.module.scss";

const ContactButton = ({ className, ...props }: { className?: string }) => {
	return (
		<button className={`${styles.contact_us} ${className}`} {...props}>
			<Link href={"/contact"}>
				<span>Связаться с нами</span>
				<ArrowTopRightIcon className={styles.arrow} />
			</Link>
		</button>
	);
};

export default ContactButton;
