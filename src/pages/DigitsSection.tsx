import React from "react";
import styles from "./Home.module.scss";
import { useTranslations } from "next-intl";

const DigitsSection = () => {
	const t = useTranslations("home.digitsSection");
	return (
		<section className={styles.info_section}>
			<h2 className={styles.info_title + " " + "section_title"}>
				{t("title1")} <span>{t("title2")}</span>
			</h2>
			<ul className="two_columns">
				<li className="two_columns_row">
					<div className="two_columns_row_cell">
						<h3 className={styles.two_columns_row_cell_title}>24</h3>
						<p className={styles.two_columns_row_cell_subtitle}>
							{t("yearsOnMarket")}
						</p>
					</div>

					<div className="two_columns_row_cell">
						<h3 className={styles.two_columns_row_cell_title}>{">"}12К</h3>
						<p className={styles.two_columns_row_cell_subtitle}>
							{t("unitsOfEquipment")}
						</p>
					</div>
				</li>
				<li className="two_columns_row">
					<div className="two_columns_row_cell">
						<h3 className={styles.two_columns_row_cell_title}>10</h3>
						<p className={styles.two_columns_row_cell_subtitle}>
							{t("yearsInIrrigationMarket")}
						</p>
					</div>

					<div className="two_columns_row_cell">
						<h3 className={styles.two_columns_row_cell_title}>{">"}200</h3>
						<p className={styles.two_columns_row_cell_subtitle}>
							{t("peopleInAftersales")}
						</p>
					</div>
				</li>

				<li className="two_columns_row">
					<div className="two_columns_row_cell">
						<h3 className={styles.two_columns_row_cell_title}>20</h3>
						<p className={styles.two_columns_row_cell_subtitle}>
							{t("yearsAsJohnDeereDealer")}
						</p>
					</div>

					<div className="two_columns_row_cell">
						<h3 className={styles.two_columns_row_cell_title}>470</h3>
						<p className={styles.two_columns_row_cell_subtitle}>
							{t("employeesInAllRegions")}
						</p>
					</div>
				</li>
				<li className="two_columns_row">
					<div className="two_columns_row_cell">
						<h3 className={styles.two_columns_row_cell_title}>14</h3>
						<p className={styles.two_columns_row_cell_subtitle}>
							{t("partsWarehousesValue")}
						</p>
					</div>

					<div className="two_columns_row_cell">
						<h3 className={styles.two_columns_row_cell_title}>14</h3>
						<p className={styles.two_columns_row_cell_subtitle}>
							{t("representationsInKazakhstanAndKyrgyzstan")}
						</p>
					</div>
				</li>
				<li className="two_columns_row">
					<div className="two_columns_row_cell">
						<h3 className={styles.two_columns_row_cell_title}>250</h3>
						<p className={styles.two_columns_row_cell_subtitle}>
							{t("serviceVehicles")}
						</p>
					</div>

					<div className="two_columns_row_cell">
						<h3 className={styles.two_columns_row_cell_title}>$65</h3>
						<p className={styles.two_columns_row_cell_subtitle}>
							{t("directInvestmentsInKazakhstan")}
						</p>
					</div>
				</li>
				<li className="two_columns_row">
					<div className="two_columns_row_cell">
						<h3 className={styles.two_columns_row_cell_title}>35%</h3>
						<p className={styles.two_columns_row_cell_subtitle}>
							{t("marketShareInPremiumSegment")}
						</p>
						<p className={styles.two_columns_row_cell_subtitle}>
							{t("serviceVehicles")}
						</p>
					</div>

					<div className="two_columns_row_cell">
						<h3 className={styles.two_columns_row_cell_title}>35%</h3>
						<p className={styles.two_columns_row_cell_subtitle}>
							{t("marketShareInPremiumSegment")}
						</p>
					</div>
				</li>
			</ul>
		</section>
	);
};

export default DigitsSection;
