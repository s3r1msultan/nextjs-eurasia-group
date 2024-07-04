import React from "react";
import styles from "./Home.module.scss";
import Wrapper from "@/app/components/Wrapper/Wrapper";
import Image from "next/image";
import intro_img from "../../public/assets/images/main_intro.png";
import ContactButton from "@/app/components/ContactButton/ContactButton";
import { useTranslation } from "next-i18next";
import { useTranslations } from "next-intl";

const IntroSection = () => {
	const t = useTranslations("home");
	const companies = ["0", "1", "2", "3", "4"] as const;

	return (
		<section className="intro">
			<Wrapper>
				<div className="intro_content">
					<h1 className="intro_title">
						<span>Eurasia</span> Group
					</h1>
					<p className="intro_subtitle">{t("introDescription")}</p>
					<ul className={styles.intro_list}>
						{companies.map((company: string, index: number) => (
							<li key={index}>{t(`introCompanies.${company}`)}</li>
						))}
					</ul>
					<ContactButton className={styles.contact_us} />
				</div>
				<div className="intro_image">
					<Image src={intro_img} alt="intro" objectFit="cover" />
					<div className="section_title overlay">
						<span>Eurasia</span> <span>Group</span>
					</div>
				</div>
			</Wrapper>
		</section>
	);
};

export async function getStaticProps(context: { locale: any }) {
	return {
		props: {
			messages: (await import(`/public/locales/${context.locale}.json`))
				.default,
		},
	};
}

export default IntroSection;
