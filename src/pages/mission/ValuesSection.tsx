import React from "react";
import styles from "./Mission.module.scss";
import StarsIcon from "@/app/icons/StarsIcon";
import HeartIcon from "@/app/icons/HeartIcon";
import PeopleHeartIcon from "@/app/icons/PeopleHeartIcon";
import BulbIcon from "@/app/icons/BulbIcon";
import LayersIcon from "@/app/icons/LayersIcon";
import GraphIcon from "@/app/icons/GraphIcon";
import FlowerIcon from "@/app/icons/FlowerIcon";
import { useTranslations } from "next-intl";

const ValuesSection = () => {
	const t = useTranslations("ourMission.valuesSection");
	return (
		<section className={styles.values}>
			<h2 className={"section_title" + " " + styles.values_title}>
				<span>{t("title")}</span>
			</h2>
			<p className={"section_subtitle" + " " + styles.values_subtitle}>
				{t("subtitle")}
			</p>
			<ul className={"two_columns" + " " + styles.two_columns}>
				<li className={"two_columns_row" + " " + styles.two_columns_row}>
					<div
						className={
							"two_columns_row_cell" + " " + styles.two_columns_row_cell
						}>
						<StarsIcon className={styles.two_columns_row_cell_icon} />
						<h3
							className={
								"two_columns_row_cell_title" +
								" " +
								styles.two_columns_row_cell_title
							}>
							{t("hungerForSuccess.title")}
						</h3>
						<p
							className={
								"two_columns_row_cell_subtitle" +
								" " +
								styles.two_columns_row_cell_subtitle
							}>
							{t("hungerForSuccess.description")}
						</p>
					</div>
					<div
						className={
							"two_columns_row_cell" + " " + styles.two_columns_row_cell
						}>
						<HeartIcon className={styles.two_columns_row_cell_icon} />
						<h3
							className={
								"two_columns_row_cell_title" +
								" " +
								styles.two_columns_row_cell_title
							}>
							{t("love.title")}
						</h3>
						<p
							className={
								"two_columns_row_cell_subtitle" +
								" " +
								styles.two_columns_row_cell_subtitle
							}>
							{t("love.description")}
						</p>
					</div>
				</li>
				<li className={"two_columns_row" + " " + styles.two_columns_row}>
					<div
						className={
							"two_columns_row_cell" + " " + styles.two_columns_row_cell
						}>
						<PeopleHeartIcon className={styles.two_columns_row_cell_icon} />
						<h3
							className={
								"two_columns_row_cell_title" +
								" " +
								styles.two_columns_row_cell_title
							}>
							{t("team.title")}
						</h3>
						<p
							className={
								"two_columns_row_cell_subtitle" +
								" " +
								styles.two_columns_row_cell_subtitle
							}>
							{t("team.description")}
						</p>
					</div>
					<div
						className={
							"two_columns_row_cell" + " " + styles.two_columns_row_cell
						}>
						<GraphIcon className={styles.two_columns_row_cell_icon} />
						<h3
							className={
								"two_columns_row_cell_title" +
								" " +
								styles.two_columns_row_cell_title
							}>
							{t("innovation.title")}
						</h3>
						<p
							className={
								"two_columns_row_cell_subtitle" +
								" " +
								styles.two_columns_row_cell_subtitle
							}>
							{t("innovation.description")}
						</p>
					</div>
				</li>
				<li className={"two_columns_row" + " " + styles.two_columns_row}>
					<div
						className={
							"two_columns_row_cell" + " " + styles.two_columns_row_cell
						}>
						<BulbIcon className={styles.two_columns_row_cell_icon} />
						<h3
							className={
								"two_columns_row_cell_title" +
								" " +
								styles.two_columns_row_cell_title
							}>
							{t("mindfulness.title")}
						</h3>
						<p
							className={
								"two_columns_row_cell_subtitle" +
								" " +
								styles.two_columns_row_cell_subtitle
							}>
							{t("mindfulness.description")}
						</p>
					</div>
					<div
						className={
							"two_columns_row_cell" + " " + styles.two_columns_row_cell
						}>
						<FlowerIcon className={styles.two_columns_row_cell_icon} />
						<h3
							className={
								"two_columns_row_cell_title" +
								" " +
								styles.two_columns_row_cell_title
							}>
							{t("wellBeing.title")}
						</h3>
						<p
							className={
								"two_columns_row_cell_subtitle" +
								" " +
								styles.two_columns_row_cell_subtitle
							}>
							{t("wellBeing.description")}
						</p>
					</div>
				</li>
				<li className={"two_columns_row" + " " + styles.two_columns_row}>
					<div
						className={
							"two_columns_row_cell" + " " + styles.two_columns_row_cell
						}>
						<LayersIcon className={styles.two_columns_row_cell_icon} />
						<h3
							className={
								"two_columns_row_cell_title" +
								" " +
								styles.two_columns_row_cell_title
							}>
							{t("synergy.title")}
						</h3>
						<p
							className={
								"two_columns_row_cell_subtitle" +
								" " +
								styles.two_columns_row_cell_subtitle
							}>
							{t("synergy.description")}
						</p>
					</div>
					<div
						className={
							"two_columns_row_cell" + " " + styles.two_columns_row_cell
						}></div>
				</li>
			</ul>
		</section>
	);
};

export default ValuesSection;
