import ContactButton from "@/app/components/ContactButton/ContactButton";
import Wrapper from "@/app/components/Wrapper/Wrapper";
import Image from "next/image";
import styles from "@/Mission.module.scss";
import intro_img from "/public/assets/images/our_mission_intro.png";
import { useTranslations } from "next-intl";

const IntroSection = () => {
	const t = useTranslations("ourMission");
	return (
		<section className="intro">
			<Wrapper>
				<div className="intro_content">
					<h1 className="intro_title">
						<span>{t("introTitle1")}</span> {t("introTitle2")}
					</h1>
					<p className="intro_subtitle">{t("introDescription")}</p>
					<ContactButton />
				</div>
				<div className="intro_image">
					<Image src={intro_img} alt="intro" />
					<div className="section_title overlay">
						<span>{t("introTitle1")}</span> <span>{t("introTitle2")}</span>
					</div>
				</div>
			</Wrapper>
		</section>
	);
};

export default IntroSection;
