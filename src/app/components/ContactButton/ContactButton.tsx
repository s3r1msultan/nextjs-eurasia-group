import ArrowTopRightIcon from "@/app/icons/ArrowTopRightIcon";
import Link from "next/link";
import React from "react";
import styles from "./ContactButton.module.scss";
import { useTranslations } from "next-intl";

const ContactButton = ({
	className,
	onClick,
	...props
}: {
	className?: string;
	onClick?: () => void;
}) => {
	const t = useTranslations("sidebar");

	return (
		<Link href={"/contact_us"} className={styles.contact_us_wrapper}>
			<button
				className={`${styles.contact_us} ${className}`}
				{...props}
				onClick={onClick}>
				<span>{t("contactUs")}</span>
				<ArrowTopRightIcon className={styles.arrow} />
			</button>
		</Link>
	);
};

export default ContactButton;
