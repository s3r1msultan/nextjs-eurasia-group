import React from "react";
import styles from "./Home.module.scss";
import Wrapper from "@/app/components/Wrapper/Wrapper";
import { useTranslations } from "next-intl";

const SolutionsSections = () => {
	const t = useTranslations("home.solutionsSection");
	return (
		<section className={styles.solutions}>
			<Wrapper>
				<div className={styles.solutions_content}>
					<h2 className={styles.solutions_title + " section_title"}>
						{t("title")}
					</h2>
					<p className={styles.solutions_subtitle + " section_subtitle"}>
						{t("subtitle")}
					</p>
					<div className={styles.solutions_flexbox}>
						<div className={styles.solutions_flexbox_column}>
							<div className={styles.solutions_flexbox_item}>
								<h3 className={styles.solutions_flexbox_item_title}>
									{t("flexboxItems.0.title")}
								</h3>
								<p className={styles.solutions_flexbox_item_subtitle}>
									{t("flexboxItems.0.subtitle")}
								</p>
							</div>
							<div className={styles.solutions_flexbox_item}>
								<h3 className={styles.solutions_flexbox_item_title}>
									{t("flexboxItems.1.title")}
								</h3>
								<p className={styles.solutions_flexbox_item_subtitle}>
									{t("flexboxItems.1.subtitle")}
								</p>
							</div>
						</div>
						<div className={styles.solutions_flexbox_column}>
							<div className={styles.solutions_flexbox_item}>
								<h3 className={styles.solutions_flexbox_item_title}>
									{t("flexboxItems.2.title")}
								</h3>
								<p className={styles.solutions_flexbox_item_subtitle}>
									{t("flexboxItems.2.subtitle")}
								</p>
							</div>

							<div className={styles.solutions_flexbox_item}>
								<h3 className={styles.solutions_flexbox_item_title}>
									{t("flexboxItems.3.title")}
								</h3>
								<p className={styles.solutions_flexbox_item_subtitle}>
									{t("flexboxItems.3.subtitle")}
								</p>
							</div>
						</div>
					</div>
					<div className={styles.solutions_flexbox_item}>
						<h3 className={styles.solutions_flexbox_item_title}>
							{t("flexboxItems.4.title")}
						</h3>
						<p className={styles.solutions_flexbox_item_subtitle}>
							{t("flexboxItems.4.subtitle")}
						</p>
					</div>
				</div>
			</Wrapper>
		</section>
	);
};

export default SolutionsSections;
