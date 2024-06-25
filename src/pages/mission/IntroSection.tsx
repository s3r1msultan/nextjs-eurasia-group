import ContactButton from "@/app/components/ContactButton/ContactButton";
import Wrapper from "@/app/components/Wrapper/Wrapper";
import Image from "next/image";
import styles from "@/Mission.module.scss";
import intro_img from "/public/assets/images/our_mission_intro.png";

const IntroSection = () => {
	return (
		<section className="intro">
			<Wrapper>
				<div className="intro_content">
					<h1 className="intro_title">
						<span>Наша</span> миссия
					</h1>
					<p className="intro_subtitle">
						Мы кормим мир, помогая фермерам внедрять и<br /> применять
						инновационные решения для развития
						<br /> сельского хозяйства и производства продукции
						<br />
						наивысшего качества
					</p>
					<ContactButton />
				</div>
				<div className="intro_image">
					<Image src={intro_img} alt="intro" />
					<div className="section_title overlay">
						<span>Наша</span> <span>миссия</span>
					</div>
				</div>
			</Wrapper>
		</section>
	);
};

export default IntroSection;
