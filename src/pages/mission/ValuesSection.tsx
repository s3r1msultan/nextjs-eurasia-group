import React from "react";
import styles from "./Mission.module.scss";
import StarsIcon from "@/app/icons/StarsIcon";
import HeartIcon from "@/app/icons/HeartIcon";
import PeopleHeartIcon from "@/app/icons/PeopleHeartIcon";
import BulbIcon from "@/app/icons/BulbIcon";
import LayersIcon from "@/app/icons/LayersIcon";
import GraphIcon from "@/app/icons/GraphIcon";
import FlowerIcon from "@/app/icons/FlowerIcon";

const ValuesSection = () => {
	return (
		<section className={styles.values_section}>
			<h2 className={"section_title" + " " + styles.values_title}>
				<span>Ценности</span>
			</h2>
			<p className={"section_subtitle" + " " + styles.values_subtitle}>
				которые помогают выполнять нашу миссию
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
							Голод к успеху
						</h3>
						<p
							className={
								"two_columns_row_cell_subtitle" +
								" " +
								styles.two_columns_row_cell_subtitle
							}>
							Мы всегда амбициозны, страстны и энергичны в наших мечтах и
							достижениях
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
							Любовь
						</h3>
						<p
							className={
								"two_columns_row_cell_subtitle" +
								" " +
								styles.two_columns_row_cell_subtitle
							}>
							Любовь - это фундамент, на котором мы строим наш бизнес, отношения
							в команде, с клиентами и партнёрами
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
							Команда
						</h3>
						<p
							className={
								"two_columns_row_cell_subtitle" +
								" " +
								styles.two_columns_row_cell_subtitle
							}>
							Мы высокомотивированные на успех профессионалы, эксперты и
							консультанты, всегда готовы прийти на помощь и оказать поддержку
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
							Инновации
						</h3>
						<p
							className={
								"two_columns_row_cell_subtitle" +
								" " +
								styles.two_columns_row_cell_subtitle
							}>
							Инноавции - неотъемлемая часть нашей жизни, а безграничность в
							росте и развитии всего, что нас окружает, делает нас уникальными
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
							Осознанность
						</h3>
						<p
							className={
								"two_columns_row_cell_subtitle" +
								" " +
								styles.two_columns_row_cell_subtitle
							}>
							Мы четко знаем, чего мы хотим в жизни, зачем пришли в нашу
							компанию и что необходимо для наших любимых клиентов и партнеров
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
							Благосостояние
						</h3>
						<p
							className={
								"two_columns_row_cell_subtitle" +
								" " +
								styles.two_columns_row_cell_subtitle
							}>
							Мы постоянно работаем над тем, чтобы увеличить прибыль наших
							клиентов партнеров, сотрудников и акционеров. Партнерство с нами -
							это взаимовыгодное сотрудничество, которое приводит к росту
							благосостояния всех сторон
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
							Синергия
						</h3>
						<p
							className={
								"two_columns_row_cell_subtitle" +
								" " +
								styles.two_columns_row_cell_subtitle
							}>
							Наши жизненные цели и ценности совпадают с целями и ценностями
							нашей компании
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
